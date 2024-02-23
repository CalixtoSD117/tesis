#include <SoftwareSerial.h>
#include <TinyGPS.h>

TinyGPS gps;
SoftwareSerial myserial(4, 5); // Declaramos el pin 4 Tx y 5 Rx
float lati, longi;
const int boton=2;
const int sensorPin = A0;

String bufer; 
String bufer2="\n";   

void setup() 
{
  Serial.begin(9600);
  myserial.begin(9600);
    pinMode(boton, INPUT);
  pinMode(7, OUTPUT);   //enable modulo wisol
  pinMode(3, OUTPUT);
  digitalWrite(7, HIGH);
}

void loop() 
{
  if (digitalRead(boton)==LOW) {
   function();
   delay(1000);
  } 

 }

void function()
{
  bool newData = false;
  unsigned long chars;
  unsigned short sentences, failed;

   for (unsigned long start = millis(); millis() - start < 1000;)
  {
    while (myserial.available())
    {
      char c = myserial.read();
      if (gps.encode(c)) // Nueva secuencia recibida
        newData = true;
    }
  }

  if (newData)
  {
    float flat, flon;
    unsigned long age;
    gps.f_get_position(&flat, &flon, &age);
    
    lati = flat == TinyGPS::GPS_INVALID_F_ANGLE ? 0.0 : flat;
    longi = flon == TinyGPS::GPS_INVALID_F_ANGLE ? 0.0 : flon;

    Serial.print("LATI=");
    Serial.print(lati);
    Serial.print(" LONG=");
    Serial.print(longi);

    Serial.print(" SAT=");
    Serial.print(gps.satellites() == TinyGPS::GPS_INVALID_SATELLITES ? 0 : gps.satellites());
    Serial.print(" PREC=");
    Serial.print(gps.hdop() == TinyGPS::GPS_INVALID_HDOP ? 0 : gps.hdop());

  }


  gps.stats(&chars, &sentences, &failed);
  Serial.print(" CHARS=");
  Serial.print(chars);
  Serial.print(" SENTENCES=");
  Serial.print(sentences);
  Serial.print(" CSUM ERR=");
  Serial.println(failed);

  
  
  int sensorVal=analogRead(sensorPin);
  float voltaje=((sensorVal/1024.0))*5;
  Serial.print("Voltaje: ");
  Serial.println(voltaje); 
  Serial.print("Grados Cº: ");
  float temp=((voltaje)*100);
  Serial.println(temp);
  Serial.println(lati);
  Serial.println(longi);
  int deviceid = "44AF83";	


	

    //-----------------------------------------------------
  //AT$SF= comando para mandar la informacion por sigfox
  //Maximo 12 bytes
  bufer="AT$SF=";
  //-----------------------------------------------------
  //agregamos nuestro valor de la temperatura al payload a enviar
   
  add_float(deviceid);
  
    //enviamos nuestro dato por Sigfox
  send_message(bufer);

   bufer="AT$SF=";
  //-----------------------------------------------------
  //agregamos nuestro valor de la temperatura al payload a enviar
add_float(longi); //un flotante ocupa 4 bytes
add_float(lati);
add_float(temp); //un flotante ocupa 4 bytes

    //enviamos nuestro dato por Sigfox
  send_message(bufer);
}

void add_float(float var1) //función para agregar flotantes al payload
{
  byte* a1 = (byte*) &var1;    //convertimos el dato a bytes
  String str1;
  //agregamos al comando AT$SF= nuestra informacion a enviar
  for(int i=0;i<4;i++)
  {
    str1=String(a1[i], HEX);    //convertimos el valor hex a string 
    if(str1.length()<2)
    {
      bufer+=0+str1;    //si no, se agrega un cero
    }
    else
    {
      bufer+=str1;    //si esta completo, se copia tal cual
    }
  }
}
void add_int(int var2)    //funcion para agregar enteros al payload (hasta 255)
{
  byte* a2 = (byte*) &var2; //convertimos el dato a bytes
  String str2;
  str2=String(a2[0], HEX);  //convertimos el valor hex a string 
  //verificamos si nuestro byte esta completo
  if(str2.length()<2)
  {
    bufer+=0+str2;    //si no, se agrega un cero
  }
  else
  {
    bufer+=str2;     //si esta completo, se copia tal cual
  }
}
void send_message(String payload)
{
  //agregamos el salto de linea "\n"
  bufer+=bufer2;
  //***
  //Habilitamos el modulo Sigfox
  digitalWrite(3, HIGH);
  delay(1000);
  //Reset del canal para asegurar que manda en la frecuencia correcta
  myserial.print("AT$RC\n"); 
  Serial.print("AT$RC\n");
  //****
  //Enviamos la informacion por sigfox
  myserial.print(bufer);
  Serial.print(bufer);
  delay(3000);
  //deshabilitamos el modulo Sigfox
  digitalWrite(3, LOW);
}