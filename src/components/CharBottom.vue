<template>
    <div ref="progress" class="char-bottom">
        <svg width="100%" height="100%">
            <circle class="bar-bg" r="45%" cx="50%" cy="50%" :stroke-width="`${circle.width}%`" stroke="#efecec" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
            <circle class="progress" r="45%" cy="50%" cx="50%" :stroke-width="`${circle.width}%`" :stroke="color" stroke-linejoin="round" stroke-linecap="round" fill="none" :stroke-dashoffset="per" :stroke-dasharray="`calc(${Math.PI} * ${90 / 100 * 100}%)`" />
        </svg>
    </div>
</template>

<script>
    export default {
        name: "CharBottom",
        props:['value','color'],
        data(){
            return{
                per: this.toPer(0),
                circle:{
                    width:5
                }
            }
        },
        watch:{
            value(newVal,otlVal){
                this.per = this.toPer(newVal);
            }
        },
        mounted() {
            let that = this;
            setTimeout(() => {
                that.per = this.toPer(this.value);
            },50)
        },
        methods:{
            toPer(num){
                return `calc(${Math.PI} * ${90 / 100 * (100 - num)}%)`;
            },
            hide(){
                this.circle.width = 1;
                Object.assign(this.$refs.progress.style,{
                    transform: `rotate(-60deg)`,
                    opacity:0
                });
                this.per = this.toPer(0);
            },
            play(){
                this.circle.width = 5;
                Object.assign(this.$refs.progress.style,{
                    transform: `rotate(-90deg)`,
                    opacity:1
                })
                this.per = this.toPer(this.value);
            }
        }
    }
</script>

<style scoped lang="scss">
    .char-bottom{
        position: absolute;
        width: 100px;
        height: 100px;
        transform: rotate(-90deg);
        transition: all 1s;
    }
    .progress{
        transition: all 1s;
    }
</style>