import {
  QWidget,
  QLabel,
  FlexLayout,
  QPushButton,
} from "@nodegui/nodegui";

const container = new QWidget();
container.setObjectName("container");
container.setLayout(new FlexLayout());

const titleVentas = new QLabel();
titleVentas.setObjectName("title-venta");
titleVentas.setText("Ventas");

const buttonAgregarVenta = new QPushButton();
buttonAgregarVenta.setObjectName("buttonAgregarVenta");
buttonAgregarVenta.setText("Registrar venta");

const buttonTopVendedores = new QPushButton();
buttonTopVendedores.setObjectName("buttonVendedores");
buttonTopVendedores.setText("Top vendedores");

const buttonRegresar = new QPushButton();
buttonRegresar.setObjectName("buttonRegresar");
buttonRegresar.setText("Regresar");

container.layout?.addWidget(titleVentas);
container.layout?.addWidget(buttonAgregarVenta);
container.layout?.addWidget(buttonTopVendedores);
container.layout?.addWidget(buttonRegresar);

container.setStyleSheet(`
  #container{
    background-color: #F1FEFC;
    height: '100%';
    width:'100%';
    align-items: 'center';
    justify-content: 'center';
  }

  #title-venta{
    font-size: 24px;
    font-weight: bold;
    color:#024B40;
    margin-bottom:20px;
  }
  #buttonAgregarVenta,
  #buttonVendedores,
  #buttonRegresar,
  #guardar-home-venta,
  #regresar-home-venta{
    width:'25%';
    background-color:#024B40;
    color:#fff;
    border-style:'none';
    border-radius:15px;
    padding:10px;
  }
  #buttonAgregarVenta:hover,
  #buttonVendedores:hover,
  #buttonRegresar:hover,
  #guardar-home-venta:hover,
  #regresar-home-venta:hover{
    background-color:#037C69;
  }

`);

export default container;
export { 
  container,
  buttonRegresar,
  buttonAgregarVenta,
  buttonTopVendedores 
};
