
//create linked list
function LinkedList() {
    this.head = null;
}

//push to create node and next value
LinkedList.prototype.push = function (val) {
    var node = {
        value: val,
        next: null
    }
    if (!this.head) {
        this.head = node;
    }
    else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
}

//reverse a linked list
function reverse(linkList) {
    if (!linkList.head || !linkList.head.next) return linkList;

    var nodes = [],
      current = linkList.head;

    while (current) {
        nodes.push(current);
        current = current.next;
    }

    var reversedLL = new LinkedList();

    reversedLL.head = nodes.pop();
    current = reversedLL.head;

    var node = nodes.pop();
    while (node) {
        node.next = null;
        current.next = node;

        current = current.next;
        node = nodes.pop();
    }
    return reversedLL;
}

//print linked list
LinkedList.prototype.print = function () {
    alert(this.head.value + ' -> ' + linkList.head.next.value + ' -> ' + linkList.head.next.next.value);
    //console.log(this.head.value + ' -> ' + linkList.head.next.value + ' -> ' + linkList.head.next.next.value);
}

//create an instance of linked list
var linkList = new LinkedList();

//push node
linkList.push('A');
linkList.push('B');
linkList.push('C');
linkList.push('D');

//print the output
linkList.print();

linkList = reverse(linkList);

//print a reverse output
linkList.print();
