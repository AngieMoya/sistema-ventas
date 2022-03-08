import {
  QWidget,
  QLabel,
  FlexLayout,
  QPushButton,
  QListWidget,
} from "@nodegui/nodegui";

const main = new QWidget();
main.setObjectName("main");
main.setLayout(new FlexLayout());

const titleList = new QLabel();
titleList.setText("Lista de Productos");
titleList.setObjectName("title");

const listWidget = new QListWidget();
listWidget.setObjectName("list");

const backList = new QPushButton();
backList.setText("Regresar");
backList.setObjectName("back");

main.layout?.addWidget(titleList);
main.layout?.addWidget(listWidget);
main.layout?.addWidget(backList);

main.setStyleSheet(`
  #main{
    background-color: #F1FEFC;
    height: '100%';
    width:'100%';
    align-items:'center';
    justify-content:'center';
  }
  #title{
    font-size: 24px;
    font-weight: bold;
    color:#024B40;
    margin-bottom:'20px';
  }
  #list{
    height: '50%';
    width:'90%';
  }

  #back{
    background-color:#024B40;
    color:#fff;
    border-style:'none';
    border-radius:15px;
    padding:10px;
  }

  #back:hover{
    background-color:#037C69;
  }

`);


export default main;
export { 
  main,
  listWidget,
  backList
 };
