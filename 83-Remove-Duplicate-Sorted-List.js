/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    // create fast and slow pointer
    let slowPointer = head;
    let fastPointer = head?.next;

    while(fastPointer){
        if(slowPointer.val != fastPointer.val){
            // skip all the duplicates
            slowPointer.next = fastPointer
            slowPointer = fastPointer
        }

        // get the next node of the list
        fastPointer = fastPointer.next;
    }

    // remove the duplicates in the ends of the list
    if(slowPointer)
        slowPointer.next = null;
    return head
};