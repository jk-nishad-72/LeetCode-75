/**
735. Asteroid Collision
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        let curr = asteroids[i];
        let destroyed = false;

        while (
            stack.length &&
            stack[stack.length - 1] > 0 &&
            curr < 0
        ) {
            let top = stack[stack.length - 1];

            if (top === -curr) {
                stack.pop();
                destroyed = true;
                break;
            } else if (top < -curr) {
                stack.pop(); // keep checking
            } else {
                destroyed = true;
                break;
            }
        }

        if (!destroyed) {
            stack.push(curr);
        }
    }

    return stack;
};

console.log(asteroidCollision([5,10,-5]))
console.log(asteroidCollision([8,-8]))
console.log(asteroidCollision([3 , 5 , -6 , 2 ,-1,4]))
