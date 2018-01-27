#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include "DHT.h"


#define WIFI_SSID       "Anusorn"
#define WIFI_PASSWORD   "12345678"

#define FIREBASE_HOST "app-host-2c179.firebaseio.com"
#define FIREBASE_AUTH "bKXwX7BBivkq2GvJKWwa3sz2Mf78erPFb71vXM70"

#define DHTPIN D2 // what digital pin we're connected to
#define DHTTYPE DHT22 // DHT 11

DHT dht(DHTPIN, DHTTYPE);

const int Light_bulb = D1;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  
  
  Serial.println(WiFi.localIP());
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  pinMode(Light_bulb, OUTPUT);
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.setInt("device/Light_bulb/control", 1);
  

  Serial.println("DHTxx test!");
  dht.begin();
  
}

void loop() {
  // put your main code here, to run repeatedly:
  
  int L = Firebase.getInt("device/Light_bulb/control");
  digitalWrite(Light_bulb, Firebase.getInt("device/Light_bulb/control"));
  Serial.println(L);
  delay(1000);
  
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float f = dht.readTemperature(true);
  
  if (isnan(h) || isnan(t) || isnan(f)) {
      Serial.println("Failed to read from DHT sensor!");
      return;
  }
  
  Serial.print("Humidity: ");
  Serial.print(h);
  Firebase.setInt("device/Humidity/control", h);
  Serial.print(" %\t");
  Serial.print("Temperature: ");
  Serial.print(t);
  Firebase.setInt("device/Temperature_Celsius/control", t);
  Serial.print(" *C ");
  Serial.print(f);
  Firebase.setInt("device/Temperature_Fahrenheit/control", f);
  Serial.print(" *F\t\n");
  
}
