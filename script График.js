var stats = [
    { label: "A", value: 100 },
    { label: "B", value: 100} ,
    { label: "C", value: 100} ,
    { label: "D", value: 100 },
    { label: "E", value: 100 },
    { label:"F", value: 100 }
]
Vue.component("poligraph"), {
    props:['stats'],
    template: ("#polygraph")
}

