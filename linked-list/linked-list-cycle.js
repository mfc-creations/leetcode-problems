// Solution: 1
function hasCycle(head) {
  let current = head;
  let set = new Set();
  while (current && current.next) {
    if (set.has(current)) {
      return true;
    }
    set.add(current);
    current = current.next;
  }
  return false;
}

// Solution: 2
// Floyd's Cycle-Finding Algorithm:
// This algorithm is used to find a loop in a linked list.
// It uses two pointers one moving twice as fast as the other one.
// The faster one is called the faster pointer and the other one is called the slow pointer.

// Follow the steps below to solve the problem:
// - Traverse linked list using two pointers.
// - Move one pointer(slow_p) by one and another pointer(fast_p) by two.
// - If these pointers meet at the same node then there is a loop. If pointers do not meet then the linked list doesn’t have a loop.

function hasCycle(head) {
  let slow_p = head;
  let fast_p = head;

  while (slow_p != null && fast_p != null && fast_p.next != null) {
    slow_p = slow_p.next;
    fast_p = fast_p.next.next;
    if (slow_p == fast_p) {
      return true;
    }
  }
  return false;
}
