import 'package:flutter/material.dart';

class ProfileWidget extends StatelessWidget {
  final listTitles = ['Бонусы', 'Адреса доставки', 'Заказов'];
  final listItems = {'Бонусы': 0, 'Адреса доставки': 1, 'Заказов': 5};

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Column(
        children: [
          Padding(
              padding: EdgeInsets.only(left: 15, top: 2),
              child: Align(
                alignment: Alignment.topLeft,
                child: Text(
                  'Кирилл',
                  style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
                ),
              )),
          Divider(color: Colors.black26),
          Padding(
              padding: EdgeInsets.only(left: 15),
              child: ListView.separated(
                  scrollDirection: Axis.vertical,
                  shrinkWrap: true,
                  itemBuilder: (BuildContext context, int i) {
                    return ListTile(
                        contentPadding: EdgeInsets.only(left: 0, right: 15),
                        title: Text(listTitles[i].toString(),
                            style:
                                TextStyle(fontSize: 17, color: Colors.black)),
                        trailing: Text(listItems[listTitles[i]].toString()));
                  },
                  separatorBuilder: (BuildContext context, int index) =>
                      Divider(color: Colors.black26),
                  itemCount: listTitles.length)),
          Divider(color: Colors.black26),
          Padding(
              padding: EdgeInsets.only(left: 15, top: 20),
              child: Column(
                children: [
                  Container(
                      alignment: Alignment.topLeft,
                      margin: EdgeInsets.only(bottom: 5),
                      child: Text(
                        'Додо-код: 1229',
                        style: TextStyle(fontWeight: FontWeight.w600),
                      )),
                  Text(
                    'Назовите его кассиру в ресторане, чтобы оплатить заказ додо-рублями',
                    style: TextStyle(color: Colors.black54),
                  )
                ],
              ))
        ],
      ),
    );
  }
}
