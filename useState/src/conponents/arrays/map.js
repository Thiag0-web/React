const produtos = [
  { 
    id: 1, 
    nome: "Mouse Gamer", 
    preco: 129.9, 
    quantidade: 15, 
    desconto: true },
  {
    id: 2,
    nome: "Teclado Mecânico",
    preco: 349.9,
    quantidade: 8,
    desconto: false,
  },
  { id: 3, nome: "Monitor 27''", preco: 1499.0, quantidade: 5, desconto: true },
  {
    id: 4,
    nome: "Cadeira Ergonômica",
    preco: 899.99,
    quantidade: 3,
    desconto: false,
  },
  {
    id: 5,
    nome: "Headset Bluetooth",
    preco: 499.5,
    quantidade: 20,
    desconto: true,
  },
  {
    id: 6,
    nome: "HD Externo 1TB",
    preco: 379.0,
    quantidade: 12,
    desconto: false,
  },
  {
    id: 7,
    nome: "Notebook Gamer",
    preco: 7499.0,
    quantidade: 2,
    desconto: true,
  },
  {
    id: 8,
    nome: "Webcam Full HD",
    preco: 249.9,
    quantidade: 10,
    desconto: false,
  },
  { id: 9, nome: "Mousepad RGB", preco: 89.9, quantidade: 25, desconto: true },
  {
    id: 10,
    nome: "SSD 1TB NVMe",
    preco: 589.0,
    quantidade: 7,
    desconto: false,
  },
  {
    id: 11,
    nome: "Cabo USB-C 2m",
    preco: 49.9,
    quantidade: 30,
    desconto: true,
  },
  { id: 12, nome: "Fonte 650W", preco: 429.9, quantidade: 6, desconto: false },
  {
    id: 13,
    nome: "Placa de Vídeo RTX 4070",
    preco: 4999.0,
    quantidade: 4,
    desconto: true,
  },
  { id: 14, nome: "Cooler CPU", preco: 229.9, quantidade: 9, desconto: false },
  {
    id: 15,
    nome: "Gabinete Mid Tower",
    preco: 389.0,
    quantidade: 5,
    desconto: false,
  },
  {
    id: 16,
    nome: "Pendrive 128GB",
    preco: 79.9,
    quantidade: 40,
    desconto: true,
  },
  {
    id: 17,
    nome: "Controle Xbox",
    preco: 399.9,
    quantidade: 10,
    desconto: false,
  },
  {
    id: 18,
    nome: "Roteador Wi-Fi 6",
    preco: 659.0,
    quantidade: 6,
    desconto: true,
  },
  {
    id: 19,
    nome: "Caixa de Som Bluetooth",
    preco: 299.9,
    quantidade: 12,
    desconto: true,
  },
  {
    id: 20,
    nome: "Câmera de Segurança",
    preco: 499.0,
    quantidade: 8,
    desconto: false,
  },
];

const novosProdutos = produtos.map((novoProduto) => {
    const desconto = novoProduto.desconto ? novoProduto.preco * 0.85 : novoProduto.preco
    

    return{
        ...novoProduto,
        preco: desconto,
        
    }
     /*return{
        id: novoProduto.id,
        nome: novoProduto.nome,
        preco: desconto,
        quantidade: novoProduto.quantidade
        }*/
});

const totalprice = produtos.reduce((total, produtoAtual) =>{
    return (total + produtoAtual.preco)
}, 0)

//console.log(totalprice)



 const filtroPreco = produtos.filter((produto) => !(produto.preco > 400 || produto.desconto))
 //const filtroPreco = produtos.map((produto) => produto.preco > 400)

 console.log(filtroPreco)

//console.log(produtos.map((produto) => (produto.preco * 0.85).toFixed(2)))

// console.log(novosProdutos)