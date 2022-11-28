
// class Node{
//     constructor(value){
//         this.value = value;
//         this.lhs = null;   //izquierdo
//         this.rhs = null;   //derecho
//         this.next = null;
//         this.prev = null;
//     }
// }

// class binaryTree{
//     constructor(){
//         this.root = null;
//     }

//     // add(node){
//     //     if(this.root==null){
//     //         this.root=node;
//     //     }else {
//     //         let aux = this.root;
//     //         while(aux.next!=null){
//     //             aux = aux.next;
//     //         }
//     //         aux.next=node;
//     //         nodo.prev=aux;
//     //     }
//     // }
 

//     makeTree(){
        
//     }



//     postO(node, array){
//         if(!node) return;
//         this.postO(node.lhs, array);
//         this.postO(node.rhs, array);
//         array.push(node.value);
//         return array;
//     }



//     preO(node, array){
//         if(!node) return;
//         array.push(node.value);
//         this.preO(node.lhs, array);
//         this.preO(node.rhs, array);
//         return array;
//     }




    

// }







class Node {
    constructor(value){
        this.value = value;
        this.lhs = null;   //izquierdo
        this.rhs = null;   //derecho
        this.next = null;
        this.prev = null;
    }


    add(value) {
        if (value < this.value) {
            this.addToTheLeft(value);
        } else {
            this.addToTheRight(value);
        }
    }

    addToTheLeft(value) {
        if (this.lhs) {
            this.lhs.add(value);
        } else {
            this.lhs = new Node(value);
        }
    }

    addToTheRight(value) {
        if (this.rhs) {
            this.rhs.add(value);
        } else {
            this.rhs = new Node(value);
        }
    }
}


// Alumnos: 
// GARCIA GONZALEZ ANDREA '3-I'.
// SANTANA ROBLES DAVID ALEJANDRO '3-I'.

class Nodo{
    constructor(numero){
        this.numero=numero;
        this.sig=null;
        this.ant=null;
    }
}
class ListaDoble{
    constructor(){
        this.primero=null;
        this.ultimo=null;
        this.root=null;
    }

    agregar(nuevo){
        if (this.primero==null){
            this.primero=nuevo;
            this.ultimo=nuevo;
        }else{
            this.ultimo.sig=nuevo
            nuevo.ant=this.ultimo;
            this.ultimo=nuevo
        }
    }
    listar(){
        let res="";
        let temp=this.primero;
        while(temp!=null){
            res+=temp.numero + "  ";
            temp=temp.sig;
        }
        return res;
    }
    invertir(){
        let aux = this.primero;
        let temp = null;
        while(aux != null){
            temp = aux.ant;
            aux.ant = aux.sig;
            aux.sig = temp;
            aux = aux.ant;
        }
        this.primero = this.ultimo;
        this.ultimo = this.primero;
        return;
    }

    crearArbol() {
        condition = element === '/' || element === '*'
        check(condition)

        condition = element === '+' || element === '-'
        check(condition)

        
    }
}

let ldoble=new ListaDoble();
let nodo=new Nodo(2);
ldoble.agregar(nodo);
nodo=new Nodo('+');
ldoble.agregar(nodo);
nodo=new Nodo(7);
ldoble.agregar(nodo);
nodo=new Nodo('*');
ldoble.agregar(nodo);
nodo=new Nodo(9);
ldoble.agregar(nodo);
ldoble.listar();
console.log(ldoble.listar());
ldoble.invertir();
console.log(ldoble.listar());
class binaryTree{
    constructor() {

    }
    preO(Node, array){
        if(!Node) return;
        array.push(Node.value);
        this.preO(Node.lhs, array);
        this.preO(Node.rhs, array);
        return array;
    }

    postO(Node, array){
        if(!Node) return;
        this.postO(Node.lhs, array);
        this.postO(Node.rhs, array);
        array.push(Node.value);
        return array;
    }

}




const head = new Node(15);
const binary = new binaryTree();
head.add(10);
head.add(90);
head.add(8);
head.add(40);
head.add(20);
head.add(16);

//console.log(head);

console.log(binary.postO(head, []))
console.log(binary.preO(head, []))