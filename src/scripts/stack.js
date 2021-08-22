const Stack = (function () {
    function Stack(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.array = array;
    }

    // 생성자 함수에 의한 프로토타입 교체
    Stack.prototype = {
        constructor: Stack,
        // 배열 추가
        push(value) {
            return this.array.push(value);
        },

        // 데이터 꺼내기
        pop(value) {
            return this.array.pop();
        },

        // 복사본 반환
        entries() {
            return [...this.array];
        },

        length() {
            return this.array.length;
        },

        delete() {
            return delete this.array;
        },
    };

    return Stack;
})();
