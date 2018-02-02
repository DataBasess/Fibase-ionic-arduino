#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>


#define WIFI_SSID       "Anusorn"
#define WIFI_PASSWORD   "anusondd"

#define FIREBASE_HOST "app-host-2c179.firebaseio.com"
#define FIREBASE_AUTH "bKXwX7BBivkq2GvJKWwa3sz2Mf78erPFb71vXM70"


const int Deley1 = D0;
const int Deley2 = D1;

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

  pinMode(Deley1, OUTPUT);
  pinMode(Deley2, OUTPUT);
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.setInt("device/Deley1/control", 1);
  Firebase.setInt("device/Deley2/control", 1);
  
  
}

void loop() {
  // put your main code here, to run repeatedly:
  
  digitalWrite(Deley1, Firebase.getInt("device/Deley1/control"));
  Serial.println("Deley1");
  Serial.println(Deley1);
  
  digitalWrite(Deley2, Firebase.getInt("device/Deley2/control"));
  Serial.println("Deley2");
  Serial.println(Deley2);
  
  
}
