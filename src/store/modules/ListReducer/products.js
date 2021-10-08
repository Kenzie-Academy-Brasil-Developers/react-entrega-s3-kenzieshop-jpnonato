import Notebook_1 from  '../../../img/Notebook-Lenovo-Ultrafino-ideapad-S145.jpg'
import Notebook_2 from  '../../../img/Notebook-Gamer-Legion5i.jpg'
import Notebook_3 from  '../../../img/Notebook-Dell-Inspiron-i15-3501.jpg'
import Notebook_4 from  '../../../img/Notebook-ASUS-M515DA-EJ533T.jpg'

const random = Math.floor(Math.random() * (10000 - 4) + 4)
 
 const products = [
    { 
      img:   Notebook_1,
      name: 'Notebook Lenovo ideapad S145 ',
      info: 'AMD RYZEN 7 , Radeon RX Vega 10 , 8 GB RAM , 512 GB SSD , Windows 10',
      price: 4999
    },
    { 
      
      img:   Notebook_2,
      name: 'Notebook Gamer Legion 5i',
      info: 'Tela 15.6" FULL HD, Intel Core i7-10750H , 16GB RAM, 512GB SSD, RTX2060, Windows 10',
      price: 7999
    },
    { 
      img:   Notebook_3,  
      name: 'Notebook Dell Inspiron i15-3501',
      info: 'Tela 15.6" HD, 11ª Geração Intel Core i7, 8GB RAM, 256GB SSD, Windows 10',
      price: 5999
    },
    { 
      
      img:   Notebook_4,
      name: 'Notebook ASUS M515DA-EJ533T',
      info: 'Tela 15.6" HD, AMD RYZEN 7 3700U, 8GB RAM, 256GB SSD, Radeon RX Vega 10, Windows 10',
      price: 3999
    }
  ]

export default products