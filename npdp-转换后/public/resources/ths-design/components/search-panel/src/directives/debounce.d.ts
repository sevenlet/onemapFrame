import { DirectiveBinding } from 'vue';
declare const debounceDirective: {
    beforeMount(el: any, binding: DirectiveBinding): void;
    beforeUnmount(el: any): void;
};
export default debounceDirective;
