import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ContactsWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        Image.asset('assets/logo.png'),
        Padding(
            padding: EdgeInsets.fromLTRB(15, 20, 0, 0),
            child: Text(
              'Связатсья с поддержкой',
              style: TextStyle(fontWeight: FontWeight.w600, fontSize: 20),
            )),
        Container(
          margin: EdgeInsets.only(top: 15, bottom: 20),
          child: Row(
            textDirection: TextDirection.ltr,
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              ActionChip(
                backgroundColor: Color.fromRGBO(255, 240, 230, 1),
                padding: EdgeInsets.symmetric(vertical: 10, horizontal: 15),
                label: Text(
                  'ПОЗВОНИТЬ',
                  style: TextStyle(
                      color: Color.fromRGBO(220, 117, 44, 1), fontSize: 16),
                ),
                onPressed: () => launch("tel:88003020060"),
              ),
              ActionChip(
                backgroundColor: Color.fromRGBO(255, 240, 230, 1),
                padding: EdgeInsets.symmetric(vertical: 10, horizontal: 15),
                label: Text(
                  'НАПИСАТЬ EMAIL',
                  style: TextStyle(
                      color: Color.fromRGBO(220, 117, 44, 1), fontSize: 16),
                ),
                onPressed: () =>
                    launch('mailto:feedback@dodopizza.com?subject=Отзыв&body='),
              )
            ],
          ),
        ),
        Divider(color: Colors.grey),
        Padding(
            padding: EdgeInsets.only(bottom: 7),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                IconButton(
                  onPressed: () => launch('https://vk.com/dodoekat'),
                  icon: Icon(Icons.school,
                      color: Colors.deepOrangeAccent, size: 40),
                ),
                IconButton(
                  onPressed: () => launch('https://facebook.com/dodopizza'),
                  icon: Icon(Icons.facebook_outlined,
                      color: Colors.deepOrangeAccent, size: 40),
                ),
                IconButton(
                  onPressed: () =>
                      launch('https://www.instagram.com/dodopizza/'),
                  icon: Icon(Icons.camera_alt_outlined,
                      color: Colors.deepOrangeAccent, size: 40),
                ),
                IconButton(
                  onPressed: () =>
                      launch('https://www.youtube.com/user/dodomovie'),
                  icon: Icon(Icons.smart_display_outlined,
                      color: Colors.deepOrangeAccent, size: 40),
                )
              ],
            )),
        Divider(color: Colors.grey),
        Padding(
            padding: EdgeInsets.only(left: 20, top: 5, bottom: 5),
            child: Column(
              children: [
                Align(
                  alignment: Alignment.topLeft,
                  child: Text(
                    'Правовые документы',
                    style: TextStyle(fontSize: 16),
                  ),
                ),
                Padding(
                    padding: EdgeInsets.symmetric(vertical: 5),
                    child: Divider(color: Colors.grey)),
                Align(
                  alignment: Alignment.topLeft,
                  child: Text(
                    'О приложении',
                    style: TextStyle(fontSize: 16),
                  ),
                )
              ],
            )),
        Divider(color: Colors.grey)
      ],
    );
  }
}
