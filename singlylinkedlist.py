class Node:
    def __init__(self, valueInput):
        self.value = valueInput
        self.next = None


class SLL:
    def __init__(self):
        #attributes are here
        self.head = None

    def appendNode(self, valueInput):
        #create a new node with that value input
        newNode = Node(valueInput)

        #attach it to the singly linked list
        if self.head == None:
            self.head = newNode
        else:
            runner = self.head 
            #while we are not pointing to the last node, keep moving runner until we have runner pointing to the last node
            while runner.next != None:
                #increment runner to the next node
                runner = runner.next
            #when runner is at the last node, update the last node's .next to point to the new node
            runner.next = newNode
        return self

    def display(self):
        runner = self.head
        result = ""
        while runner != None:
            result+= f"{runner.value} ->"
            # print(runner.value)
            runner = runner.next
        print(result)

    def contains(self, valToFind):
        pass
        # return true or false



sll1 = SLL()
sll2 = SLL()



sll1.appendNode(5).appendNode(8).appendNode("potato").display()


# node1 = Node(9)
# node2 = Node(8)
# node3 = Node("potato")

# node1.next = node2
# node2.next = node3

# print(node1.value)
# print(node2.value)

# print(node1.next.next.next)