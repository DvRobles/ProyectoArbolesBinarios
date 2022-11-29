
class Node {
    constructor(value){
        this.value = value;
        this.lhs = null;   //izquierdo
        this.rhs = null;   //derecho
        this.next = null;
        this.prev = null;
    }
}

class ListaDoble{
    constructor(){
        this.first=null;
        this.ultimo=null;
        this.root=null;
    }

    agregar(nuevo){
        if (this.first==null){
            this.first=nuevo;
            this.ultimo=nuevo;
        }else{
            this.ultimo.next=nuevo
            nuevo.prev=this.ultimo;
            this.ultimo=nuevo
        }
    }

    listar(){ //solo lo uso para checar
        let res="";
        let temp=this.first;
        while(temp!=null){
            res+=temp.value + "  ";
            temp=temp.next;
        }
        return res;
    }

    makeTree() {
        let aux = this.first;
        let xpression;
        while (aux) {
            xpression = aux.value === '/' || aux.value === '*';
            if(xpression) {
                aux.lhs = aux.prev;
                aux.rhs = aux.next;
                this.drop(aux.prev);
                this.drop(aux.next);
            }
            aux = aux.next;
        }

        aux = this.first
        while (aux) {
            xpression = aux.value === '+' || aux.value === '-';
            if(xpression) {
                aux.lhs = aux.prev;
                aux.rhs = aux.next;
                this.drop(aux.prev);
                this.drop(aux.next);
            }
            if (!aux.next) {
                this.root = aux;
            }
            aux = aux.next
        }
        return this.root;
    }

    drop(elemento){
        if(this.first == elemento) {
            this.first = this.first.next;
            return;
        }
        if(elemento.next && elemento.prev) {
            elemento.next.prev = elemento.prev;
            elemento.prev.next = elemento.next;
        return;
        }

        if(!elemento.next) {
        this.ultimo = elemento.prev;
        elemento.prev.next = elemento.next;
        return;
        }
    }

    //preOrder es RID
    preO(Node, array){
        if(!Node) return;
        array.push(Node.value);
        this.preO(Node.lhs, array);
        this.preO(Node.rhs, array);
        return array;
    }

    //postOrder es IDR
    postO(Node, array){
        if(!Node) return;   
        this.postO(Node.lhs, array);
        this.postO(Node.rhs, array);
        array.push(Node.value);
        return array;
    }

    postOrResultado(){
        let contador = 0;
        let data = this.postO(this.first, []);


        for (let i = 0; i <= data.length; i++) {
            if (data[i] == '/' || data[i] == '*' || data[i] == '+' || data[i] == '-') {
                if (data[i] == '/') {
                    contador = (data[i-2]/data[i-1]);
                    data[i] = contador;
                    data.splice(i-2,2);
                    i=0;
                }else if (data[i] == '*') {
                    contador = (data[i-2]*data[i-1]);
                    data[i] = contador;
                    data.splice(i-2,2);
                    i=0;
                }else if (data[i] == '+') {
                    contador = (data[i-2]+data[i-1]);
                    data[i] = contador;
                    data.splice(i-2,2);
                    i=0;
                }else if (data[i] == '-') {
                    contador = (data[i-2]-data[i-1]);
                    data[i] = contador;
                    data.splice(i-2,2);
                    i=0;
                }
            }
            
        }
        return data;
    }

    preOrResultado(){
        let contador = 0; // no se si se ocupe
        let data = this.preO(this.first, []);


        for (let i = data.length; i >=0;  i--) {
            if (data[i] == '/' || data[i] == '*' || data[i] == '+' || data[i] == '-') {
                if (data[i] == '/') {
                    contador = (data[i+1]/data[i+2]);
                    data[i] = contador;
                    data.splice(i+1,2);
                    i=data.length;
                }else if (data[i] == '*') {
                    contador = (data[i+1]*data[i+2]);
                    data[i] = contador;
                    data.splice(i+1,2);
                    i=data.length;
                }else if (data[i] == '+') {
                    contador = (data[i+1]+data[i+2]);
                    data[i] = contador;
                    data.splice(i+1,2);
                    i=data.length;
                }else if (data[i] == '-') {
                    contador = (data[i+1]-data[i+2]);
                    data[i] = contador;
                    data.splice(i+1,2);
                    i=data.length;
                }
            }
            
        }
        return data;
    }
}


// expresion A EVALUAR = 2  +  7  *  9  /  7  => DE EJEMPLO  para su revisión:)
//pd. si quiere intentar con otra EXPRESIÓN solo requiere cambiar los simbolos/numeros de los nodos y cambiara el resultado
//result pre [ 2, 7, 9, '*', 7, '/', '+' ]
//result pos [ '+', 2, '/', '*', 7, 9, 7 ]
// resultado debe dar 11 en pre y pos; 
//pd. si se lograrón los resultados;



let ldoble = new ListaDoble();
let arrayPre = [];
let arrayPos = [];

let nodo=new Node(2);
ldoble.agregar(nodo);
nodo=new Node('+');
ldoble.agregar(nodo);
nodo=new Node(7);
ldoble.agregar(nodo);
nodo=new Node('*');
ldoble.agregar(nodo);
nodo=new Node(9);
ldoble.agregar(nodo);
nodo=new Node("/");
ldoble.agregar(nodo);
nodo=new Node(7);
ldoble.agregar(nodo);

//Muestro la expresión
console.log(ldoble.listar());
console.log(ldoble.makeTree());
//Generar Arbol PRE y POST
console.log(ldoble.postO(ldoble.first, arrayPos))
console.log(ldoble.preO(ldoble.first, arrayPre))

//Resultados de PreOrder;
console.log(ldoble.preOrResultado());
//Resultados de PostOrder;
console.log(ldoble.postOrResultado());
