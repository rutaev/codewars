/**
 * Узнать количество аргументов переданных функции.
 * Чтобы посмотреть сами аргументы и их индекс достаточно просто обратиться к объекту arguments. console.log(arguments);
 */

function args_count() {

    return arguments.length;
};

args_count(1, 2);