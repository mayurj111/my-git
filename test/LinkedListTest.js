//describe a test for linked list js
describe("LinkedList", function () {
    
    //set up and create an instance before test
    beforeEach(function () {
        linkL = new LinkedList();
        linkL.push('A');
        linkL.push('B');
    });

    //test for head
    it('should contain correct head value', function () {
        expect(linkL.head.value).toBe('A');
    });

    //test for node
    it('should contain correct node value', function () {
        expect(linkL.head.next.value).toBe('B');
    });

    //test for reverse
    it('should contain correct reverse node value', function () {
        linkL = reverse(linkL);
        expect(linkL.head.value).toBe('B');
    });
        
});