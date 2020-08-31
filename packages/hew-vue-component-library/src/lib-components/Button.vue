<template>
    <button :class="$style.buttonPrimary">
        <slot></slot>
    </button>    
</template>

<script>
export default {
    name: 'Button'
}
</script>

<style module>
.buttonPrimary {
    background-color: #F18C8E;
    border: none;
    outline: none;
    padding: 12px 24px;
    border-radius: 4px;
    color: white;
    font-weight: bold;
}

.buttonPrimary:hover {
    background-color: #eb5f61;
}
</style>
