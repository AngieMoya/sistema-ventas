import {
  QMainWindow,
  QWidget,
  QLabel,
  FlexLayout,
  QPushButton,
  QListWidgetItem,
  QTableWidgetItem

} from "@nodegui/nodegui";

import productos, {
  contProduct,
  buttonCrear,
  regresar,
  buttonList
} from "./views/productos";

import ventas, {
  container,
  buttonAgregarVenta,
  buttonRegresar,
  buttonTopVendedores
} from "./views/ventas";

import crear, { 
  back,
  inputCodigo,
  inputDescripcion,
  inputPrecio,
  save
} 
from "./views/productos/crear-producto";

import registrarVenta, { 
  backVenta,
  guardarVenta,
  inputFecha,
  inputNumVendedor,
  inputCodigoProducto,
  inputCantidad,
  inputFormaPago
} 
from "./views/ventas/registrar-venta";

import listProduct,{
  listWidget,
  backList
} from "./views/productos/lista-productos";

import top ,{
  table
}
from './views/ventas/top-vendedores';

const win = new QMainWindow();
win.setWindowTitle("Sistema de ventas");
win.setMinimumSize(900, 500);

const centralWidget = new QWidget();
centralWidget.setObjectName("myroot");
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

const containerInicio = new QWidget();
containerInicio.setObjectName("inicio");
containerInicio.setLayout(new FlexLayout());

const label = new QLabel();
label.setObjectName("mylabel");
label.setText("Sistema de ventas");

const buttonProducto = new QPushButton();
buttonProducto.setText("Productos");
buttonProducto.setObjectName("button-productos");

const buttonVentas = new QPushButton();
buttonVentas.setText("Ventas");
buttonVentas.setObjectName("button-ventas");

let row = 0;

//logica//

buttonProducto.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(containerInicio);
  containerInicio.close();
  centralWidget.update();
  productos.show();
  centralWidget.layout?.addWidget(productos);
});

buttonVentas.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(containerInicio);
  containerInicio.close();
  centralWidget.update();
  ventas.show();
  centralWidget.layout?.addWidget(ventas);
});

//productos//

buttonCrear.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(contProduct);
  contProduct.close();
  centralWidget.update();
  crear.show();
  centralWidget.layout?.addWidget(crear);
});

regresar.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(contProduct);
  contProduct.close();
  centralWidget.update();
  containerInicio.show();
  centralWidget.layout?.addWidget(containerInicio);
});

//modulo crear producto//

back.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(crear);
  crear.close();
  centralWidget.update();
  contProduct.show();
  centralWidget.layout?.addWidget(contProduct);
});

save.addEventListener("clicked", () => {
  const items = {
    codigo:"Código: " + inputCodigo.text(),
    descripcion:"Descripción: " + inputDescripcion.toPlainText(),
    precio:"Precio $ : " + inputPrecio.text()
   }
  const listWidgetItem = new QListWidgetItem();
  listWidgetItem.setText(`${items.codigo} ${items.descripcion} ${items.precio}`);
  listWidget.addItem(listWidgetItem);
  inputCodigo.clear();
  inputDescripcion.clear();
  inputPrecio.clear();

})

//modulo lista productos//

buttonList.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(contProduct);
  contProduct.close();
  centralWidget.update();
  listProduct.show();
  centralWidget.layout?.addWidget(listProduct);
});

backList.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(listProduct);
  listProduct.close();
  centralWidget.update();
  contProduct.show();
  centralWidget.layout?.addWidget(contProduct);
})

//ventas//

buttonRegresar.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(container);
  container.close();
  centralWidget.update();
  containerInicio.show();
  centralWidget.layout?.addWidget(containerInicio);
});

buttonAgregarVenta.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(container);
  container.close();
  centralWidget.update();
  registrarVenta.show();
  centralWidget.layout?.addWidget(registrarVenta);
});

buttonTopVendedores.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(container);
  container.close();
  centralWidget.update();
  top.show();
  centralWidget.layout?.addWidget(top);

})

backVenta.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(registrarVenta);
  registrarVenta.close();
  centralWidget.update();
  container.show();
  centralWidget.layout?.addWidget(container);
});

//top vendedores


guardarVenta.addEventListener("clicked", () => {
  
  const newVenta = {
    fecha:inputFecha.text(),
    numeroVendedor:inputNumVendedor.text(),
    codigo:inputCodigoProducto.text(),
    cantidad:inputCantidad.text(),
    pago:inputFormaPago.currentText()
   }
  table.insertRow(row);
  const tableWidgetItem1 = new QTableWidgetItem(`${newVenta.fecha}`);
  const tableWidgetItem2 = new QTableWidgetItem(`${newVenta.numeroVendedor}`);
  const tableWidgetItem3 = new QTableWidgetItem(`${newVenta.codigo}`);
  const tableWidgetItem4 = new QTableWidgetItem(`${newVenta.cantidad}`);
  const tableWidgetItem5 = new QTableWidgetItem(`${newVenta.pago}`);

  table.setItem(row,0,tableWidgetItem1);
  table.setItem(row,1,tableWidgetItem2);
  table.setItem(row,2,tableWidgetItem3);
  table.setItem(row,3,tableWidgetItem4);
  table.setItem(row,4,tableWidgetItem5);

  inputNumVendedor.clear();
  inputCodigoProducto.clear();
  inputCantidad.clear();

  row += 1;
})


console.log("Hello")

containerInicio.layout?.addWidget(label);
containerInicio.layout?.addWidget(buttonProducto);
containerInicio.layout?.addWidget(buttonVentas);
rootLayout.addWidget(containerInicio);
win.setCentralWidget(centralWidget);
win.setStyleSheet(
  `
    #myroot {
      background-color: #F1FEFC;
      height: '100%';
      align-items: 'center';
      justify-content: 'center';
    }

    #inicio {
      background-color: #F1FEFC;
      height: '100%';
      width:'100%';
      align-items: 'center';
      justify-content: 'center';
    }
    #mylabel {
      font-size: 24px;
      font-weight: bold;
      color:#024B40;
      margin-bottom:20px;
    }
    #button-productos,
    #button-ventas{
      width:'25%';
      background-color:#024B40;
      color:#fff;
      border-style:'none';
      border-radius:15px;
      padding:10px;
    }
    #button-productos:hover,
    #button-ventas:hover{
      background-color:#037C69;
    }
  `
);
win.show();

(global as any).win = win;
