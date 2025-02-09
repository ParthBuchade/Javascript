function greet() {
    return function hello() {
        return 7 + 8;
    }
}
greet()();