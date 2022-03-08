import {
    QWidget,
    QLabel,
    FlexLayout,
    QTableWidget,
    QTableWidgetItem,
    QPushButton,
  } from "@nodegui/nodegui";

const contMain = new QWidget();
contMain.setObjectName("main");
contMain.setLayout(new FlexLayout());

const titleTop = new QLabel();
titleTop.setText("Top vendedores");
titleTop.setObjectName("title");

const table = new QTableWidget(0,5);
table.setObjectName("table")
table.setHorizontalHeaderLabels(['Fecha', 'Num vendedor', 'Codigo del producto', 'Cantidad', 'Forma de pago']);


const backtop = new QPushButton();
backtop.setText("Regresar");
backtop.setObjectName("back");

contMain.layout?.addWidget(titleTop);
contMain.layout?.addWidget(table);
contMain.layout?.addWidget(backtop);

contMain.setStyleSheet(`
  #main{
    background-color: #F1FEFC;
    height: '100%';
    width:'100%';
    align-items: 'center';
    justify-content: 'center';
  }
  #title{
    font-size: 24px;
    font-weight: bold;
    color:#024B40;
    margin-bottom:10px;
  }

  #table{
    width: '90%';
    height: '80%';
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
`)

export default contMain;
export{
  table
}

