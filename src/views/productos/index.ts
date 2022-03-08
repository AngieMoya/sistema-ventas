import {
    QWidget,
    QLabel,
    FlexLayout,
    QPushButton,
  } from "@nodegui/nodegui";


// main container  

const contProduct = new QWidget();
contProduct.setObjectName("containerProduct");
contProduct.setLayout(new FlexLayout());

const labelProducto = new QLabel();
labelProducto.setObjectName("titleProduct");
labelProducto.setText("Productos");

const buttonCrear = new QPushButton();
buttonCrear.setObjectName("crearP")
buttonCrear.setText("Añadir producto");

const buttonList = new QPushButton();
buttonList.setObjectName("lista");
buttonList.setText("Lista de productos");

const regresar = new QPushButton();
regresar.setObjectName("regresarP")
regresar.setText("Regresar");

contProduct.layout?.addWidget(labelProducto);
contProduct.layout?.addWidget(buttonCrear);
contProduct.layout?.addWidget(buttonList);
contProduct.layout?.addWidget(regresar);


contProduct.setStyleSheet(`
  #containerProduct{
    background-color: #F1FEFC;
    height: '100%';
    width:'100%';
    align-items: 'center';
    justify-content: 'center';
  }

  #titleProduct{
    font-size: 24px;
    font-weight: bold;
    color:#024B40;
    margin-bottom:20px;
  }

  #container-button{
      background-color:'blue';
  }

  #crearP,
  #regresarP,
  #lista{
    width:'25%';
    background-color:#024B40;
    color:#fff;
    border-style:'none';
    border-radius:15px;
    padding:10px;
  }
  #crearP:hover,
  #regresarP:hover,
  #lista:hover{
    background-color:#037C69;
  }
`);



export default contProduct;
export{
    contProduct,
    buttonCrear,
    regresar,
    buttonList
}
