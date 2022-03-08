import {
  QWidget,
  QLabel,
  FlexLayout,
  QPushButton,
  QLineEdit,
  QTextEdit,
  QIcon,
  QSize,
} from "@nodegui/nodegui";
import backIcon from "../../../assets/back.png";

// contenedor crear producto//

const contCrearProduct = new QWidget();
contCrearProduct.setObjectName("containerCrearProduct");
contCrearProduct.setLayout(new FlexLayout());

//header//

const header = new QWidget();
header.setObjectName("header");
header.setLayout(new FlexLayout());

const arrowIcon = new QIcon(backIcon);
const back = new QPushButton();
back.setIcon(arrowIcon);
back.setIconSize(new QSize(30, 30));
back.setObjectName("back");

const titleAñadir = new QLabel();
titleAñadir.setText("Añadir producto");
titleAñadir.setObjectName("title");

//contenedor de codigo//

const contCodigo = new QWidget();
contCodigo.setObjectName("container-codigo");
contCodigo.setLayout(new FlexLayout());

const codigo = new QLabel();
codigo.setText("Código");
codigo.setObjectName("label-crear");

const inputCodigo = new QLineEdit();
inputCodigo.setPlaceholderText("Ingrese código del producto");
inputCodigo.setObjectName("input");
inputCodigo.addEventListener('textChanged', (text) => {
    const sanitizedText = text.replace(/\D/g,"")
    if(!!sanitizedText.length) inputCodigo.setText(sanitizedText);
    else inputCodigo.clear()
  })

//contenedor de descripcion

const contDescripcion = new QWidget();
contDescripcion.setObjectName("container-descripcion");
contDescripcion.setLayout(new FlexLayout());

const descripcion = new QLabel();
descripcion.setText("Descripción");
descripcion.setObjectName("label-crear");

const inputDescripcion = new QTextEdit();
inputDescripcion.setPlaceholderText("Ingrese descripcion del producto");
inputDescripcion.setObjectName("input");

//contenedor de precio

const contPrecio = new QWidget();
contPrecio.setObjectName("container-precio");
contPrecio.setLayout(new FlexLayout());

const precio = new QLabel();
precio.setText("Precio");
precio.setObjectName("label-crear");

const inputPrecio = new QLineEdit();
inputPrecio.setPlaceholderText("Ingrese precio del producto");
inputPrecio.setObjectName("input");
inputPrecio.addEventListener('textChanged', (text) => {
    const sanitizedText = text.replace(/\D/g,"")
    if(!!sanitizedText.length) inputPrecio.setText(sanitizedText);
    else inputPrecio.clear()
  })

const save = new QPushButton();
save.setObjectName("guardar");
save.setText("Guardar");

header.layout?.addWidget(back);
header.layout?.addWidget(titleAñadir);

contCodigo.layout?.addWidget(codigo);
contCodigo.layout?.addWidget(inputCodigo);

contDescripcion.layout?.addWidget(descripcion);
contDescripcion.layout?.addWidget(inputDescripcion);

contPrecio.layout?.addWidget(precio);
contPrecio.layout?.addWidget(inputPrecio);

contCrearProduct.layout?.addWidget(header);
contCrearProduct.layout?.addWidget(contCodigo);
contCrearProduct.layout?.addWidget(contDescripcion);
contCrearProduct.layout?.addWidget(contPrecio);
contCrearProduct.layout?.addWidget(save);

contCrearProduct.setStyleSheet(`

    #containerCrearProduct{
        background-color: #F1FEFC;
        height: '100%';
        width:'100%';
        align-items:'center';
        justify-content:'center';
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
    #container-codigo,
    #container-descripcion,
    #container-precio{
        width:'90%';
        flex-direction:'row';
        padding:20px;
        
  }

    #container-descripcion{
        align-items:'flex-start';
    }

    #input{
        width:'80%';
  }

    #label-crear{
        width:'20%';
        font-weight: bold;
        color:#024B40;
    }
    #guardar{
        width:'90%';
        background-color:#024B40;
        color:#fff;
        border-style:'none';
        border-radius:15px;
        padding:10px;
  }
    #guardar:hover{
        background-color:#037C69;
    }

    #back{
        border-style:'none';
        background-color:'transparent';
    }
`);

export default contCrearProduct;

export{
    back,
    save,
    inputCodigo,
    inputDescripcion,
    inputPrecio
}
