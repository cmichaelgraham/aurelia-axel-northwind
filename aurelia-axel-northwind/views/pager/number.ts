export class NumberValueConverter {
    toView(n) {
        return n.toString();
    }

    fromView(s) {
        return Number(s);
    }
}