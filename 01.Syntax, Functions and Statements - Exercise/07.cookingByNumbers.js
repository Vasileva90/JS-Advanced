function cookingByNumbers(number, command1, command2, command3, command4, command5) {

    number = manipulator(number, command1);
    number = manipulator(number, command2);
    number = manipulator(number, command3);
    number = manipulator(number, command4);
    number = manipulator(number, command5);

    function manipulator(num, command) {
        switch(command) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num += 1;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num -= num * 0.2;
                console.log(num);
                break;
        }
        return num;
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
//cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');