import {
    QWidget,
    QLabel,
    FlexLayout,
    QPushButton,
    QLineEdit,
    QDateEdit,
    QComboBox,
    QIcon,
    QSize
  } from "@nodegui/nodegui";
import backIcon from '../../../assets/back.png';


const containerNuevaVenta = new QWidget();
containerNuevaVenta.setObjectName("main");
containerNuevaVenta.setLayout(new FlexLayout());

//header//
const headerVenta = new QWidget();
headerVenta.setObjectName("header");
headerVenta.setLayout(new FlexLayout());

const arrow = new QIcon(backIcon);
const backVenta = new QPushButton();
backVenta.setObjectName("regresar-venta");
backVenta.setIcon(arrow);
backVenta.setIconSize(new QSize(30, 30));

const titleRegistrarVenta = new QLabel();
titleRegistrarVenta.setText("Registrar venta");
titleRegistrarVenta.setObjectName("title");

// container fecha//

const containerFecha = new QWidget();
containerFecha.setObjectName("container-fecha");
containerFecha.setLayout(new FlexLayout());

const fecha = new QLabel();
fecha.setText("Fecha");
fecha.setObjectName("label");

const inputFecha = new QDateEdit();
inputFecha.setObjectName("input");

//container codigo vendedor//

const containerNumVendedor = new QWidget();
containerNumVendedor.setObjectName("container-numVendedor");;
containerNumVendedor.setLayout(new FlexLayout());

const numVendedor = new QLabel();
numVendedor.setText("Numero de vendedor");
numVendedor.setObjectName("label");

const inputNumVendedor = new QLineEdit();
inputNumVendedor.setPlaceholderText("Ingrese el numero del vendedor");
inputNumVendedor.setObjectName("input");
inputNumVendedor.addEventListener('textChanged', (text) => {
  const sanitizedText = text.replace(/\D/g,"")
  if(!!sanitizedText.length) inputNumVendedor.setText(sanitizedText);
  else inputNumVendedor.clear()
})

//container codigo producto //

const contCodProduct = new QWidget();
contCodProduct.setObjectName("container-codProduct");
contCodProduct.setLayout(new FlexLayout());

const codigoProducto = new QLabel();
codigoProducto.setText("Código producto");
codigoProducto.setObjectName("label");

const inputCodigoProducto = new QLineEdit();
inputCodigoProducto.setPlaceholderText("Ingrese el código del producto");
inputCodigoProducto.setObjectName("input");
inputCodigoProducto.addEventListener('textChanged', (text) => {
  const sanitizedText = text.replace(/\D/g,"")
  if(!!sanitizedText.length) inputCodigoProducto.setText(sanitizedText);
  else inputCodigoProducto.clear()
})

//container cantidad //

const containerCantidad = new QWidget();
containerCantidad.setObjectName("container-cantidad");
containerCantidad.setLayout(new FlexLayout);

const cantidad = new QLabel();
cantidad.setText("Cantidad");
cantidad.setObjectName("label");

const inputCantidad = new QLineEdit();
inputCantidad.setPlaceholderText("Ingrese la cantidad del producto");
inputCantidad.setObjectName("input");
inputCantidad.addEventListener('textChanged', (text) => {
  const sanitizedText = text.replace(/\D/g,"")
  if(!!sanitizedText.length) inputCantidad.setText(sanitizedText);
  else inputCantidad.clear()
})

//container forma de pago//

const containerFormaPago = new QWidget();
containerFormaPago.setObjectName("cont-formaPago");
containerFormaPago.setLayout(new FlexLayout());

const formaPago = new QLabel();
formaPago.setText("Medio de pago");
formaPago.setObjectName("label");

const inputFormaPago = new QComboBox();
inputFormaPago.addItem(undefined, "Efectivo");
inputFormaPago.addItem(undefined, "Tarjeta Debito");
inputFormaPago.addItem(undefined, "Tarjeta Credito");
inputFormaPago.setObjectName("input");

const guardarVenta = new QPushButton();
guardarVenta.setObjectName("guardar-venta");
guardarVenta.setText("Guardar venta");


containerNuevaVenta.layout?.addWidget(headerVenta);
headerVenta.layout?.addWidget(backVenta);
headerVenta.layout?.addWidget(titleRegistrarVenta);

containerNuevaVenta.layout?.addWidget(containerFecha);
containerFecha.layout?.addWidget(fecha);
containerFecha.layout?.addWidget(inputFecha);

containerNuevaVenta.layout?.addWidget(containerNumVendedor);
containerNumVendedor.layout?.addWidget(numVendedor);
containerNumVendedor.layout?.addWidget(inputNumVendedor);

containerNuevaVenta.layout?.addWidget(contCodProduct);
contCodProduct.layout?.addWidget(codigoProducto);
contCodProduct.layout?.addWidget(inputCodigoProducto);

containerNuevaVenta.layout?.addWidget(containerCantidad);
containerCantidad.layout?.addWidget(cantidad);
containerCantidad.layout?.addWidget(inputCantidad);

containerNuevaVenta.layout?.addWidget(containerFormaPago);
containerFormaPago.layout?.addWidget(formaPago);
containerFormaPago.layout?.addWidget(inputFormaPago);

containerNuevaVenta.layout?.addWidget(guardarVenta);

containerNuevaVenta.setStyleSheet(`
  #main{
    background-color: #F1FEFC;
    height: '100%';
    width:'100%';
    align-items: 'center';
    justify-content: 'center';
  }
  #header{
    width:'90%';
    flex-direction:'row';
    align-items:'center';
    justify-content:'space-between';
  }
  #title{
    font-size: 24px;
    font-weight: bold;
    color:#024B40;
  }

  #container-fecha,
  #container-numVendedor,
  #container-codProduct,
  #container-cantidad,
  #cont-formaPago{
    width:'90%';
    flex-direction:'row';
    padding:20px;
  }

  #input{
    width:'75%';
  }

  #label{
    width:'25%';
    font-weight: bold;
    color:#024B40;
  }

  #guardar-venta{
    width:'90%';
    background-color:#024B40;
    color:#fff;
    border-style:'none';
    border-radius:15px;
    padding:10px;
  }
  #guardar-venta:hover{
    background-color:#037C69;
  }

  #regresar-venta{
    border-style:'none';
    background-color:'transparent';
  }



`)









export default containerNuevaVenta;
export{
    backVenta,
    guardarVenta,
    inputFecha,
    inputNumVendedor,
    inputCodigoProducto,
    inputCantidad,
    inputFormaPago
}