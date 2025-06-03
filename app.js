
// TODO: este array esta relleno para las pruebas, se tiene que leer de un archivo JSON, que es el que se mantendrá actualizado
let paloStatus = [
    {
        "letter": "",
        "num": 0,
        "status": ""
    },
    {
        "letter": "P",
        "num": "M789.06,256.77a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "P",
        "num": "M766,317.58a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "P",
        "num": "M720.16,272.68a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "P",
        "num": "M668.87,256.23a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "P",
        "num": "M621.06,240.16a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "P",
        "num": "M566.68,224.1a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "P",
        "num": "M516.74,206.68a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "O",
        "num": "M749.58,372.55a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "O",
        "num": "M730.65,428.29a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "O",
        "num": "M693.65,390.16a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "O",
        "num": "M628.42,369.26a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "O",
        "num": "M498,327.06a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "O",
        "num": "M560.68,347.39a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "M",
        "num": "M710.48,479.19a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "M",
        "num": "M697.26,518.9a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "M",
        "num": "M687.06,498.35a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "M",
        "num": "M607.71,472.23a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "M",
        "num": "M546.94,453.45a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "M",
        "num": "M444,418.61a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "N",
        "num": "M417.65,488.29a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "N",
        "num": "M497,513.65a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "N",
        "num": "M581.19,541.32a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "N",
        "num": "M664.81,569.19a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "N",
        "num": "M684.35,552.74a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "N",
        "num": "M668.77,597.61a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "J",
        "num": "M408.74,575.77a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "J",
        "num": "M376.23,647a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "J",
        "num": "M343.9,733.71a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "J",
        "num": "M333.45,761a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "J",
        "num": "M303.45,840.35a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "J",
        "num": "M458.68,576.35a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "J",
        "num": "M501.65,592a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "J",
        "num": "M466.42,633.45a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "J",
        "num": "M438.94,714.55a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "J",
        "num": "M410.29,796a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "J",
        "num": "M383.58,863.39a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "I",
        "num": "M527.58,600.74a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "I",
        "num": "M570.74,614.87a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "I",
        "num": "M537.65,658.61a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "I",
        "num": "M508,738.55a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "I",
        "num": "M479.39,817.9a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "I",
        "num": "M456.16,884.29a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "H",
        "num": "M530.81,907.26a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "H",
        "num": "M557.39,834.23a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "H",
        "num": "M592.23,738.74a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "H",
        "num": "M616.74,667.52a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "H",
        "num": "M652.61,642.74a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "H",
        "num": "M598.42,623.39a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "V",
        "num": "M690.55,933.06a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "V",
        "num": "M654.55,933.84a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "V",
        "num": "M626.29,934.61a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M734.29,926.48a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M735.06,889.71a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M733.9,849.45a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M734.29,810.35a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M731.19,775.13a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M731.19,736.42a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M732,623.39a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M815.58,624.16a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M783.45,683a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M786.16,758.48a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M789.26,833.58a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "G",
        "num": "M792.35,924.16a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M968.87,345.06a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M873.26,344.68a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M927.45,353.19a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M870.16,389.19a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M973.9,385.71a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M930.16,409.32a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M979.32,427.52a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M869.39,431.77a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M870.16,474.35a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M978.55,472.81a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M931.71,494.87a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M872.87,518.87a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M979.71,514.61a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M941.74,552.65a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M978.58,553a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M973.9,577.32a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M955.71,578.1a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M861.65,556.71a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M861.65,578.1a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M911.19,579.65a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M912,636.16a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M914.68,688.81a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M918.94,769.71a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M920.1,849.84a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "F",
        "num": "M922.42,916.81a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "E",
        "num": "M1037.39,579.65a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "E",
        "num": "M1090.42,578.1a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "E",
        "num": "M1061.77,710.87a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "E",
        "num": "M1061,657.45a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "E",
        "num": "M1064.1,765.06a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "E",
        "num": "M1066.42,847.13a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "E",
        "num": "M1070.68,912.16a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "D",
        "num": "M1525.52,727.9a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "D",
        "num": "M1466.29,752.68a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "D",
        "num": "M1391.19,786a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "D",
        "num": "M1317.26,816.55a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "D",
        "num": "MD63.84,803a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "D",
        "num": "M1296.35,872.68a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "C",
        "num": "M1473.26,614.48a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "C",
        "num": "M1411.71,643.52a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "C",
        "num": "M1338.55,672.94a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "C",
        "num": "M1262.68,705.84a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "C",
        "num": "M1210.42,690.74a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "C",
        "num": "M1242.94,767.39a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "Bprima",
        "num": "M1209.26,636.94a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "Bprima",
        "num": "M1179.84,580a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "Bprima",
        "num": "M1235.19,584.68a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "Bprima",
        "num": "M1284.74,563.39a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "Bprima",
        "num": "M1334.29,544.42a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "Bprima",
        "num": "M1384.23,522.35a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "Bprima",
        "num": "M1420.23,506.87a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "B",
        "num": "M1156.61,527.39a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "B",
        "num": "M1128.74,467.39a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "B",
        "num": "M1182.16,474.35a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "B",
        "num": "M1232.87,452.68a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "B",
        "num": "M1281.26,432.16a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "B",
        "num": "M1330.42,412.42a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "B",
        "num": "M1368.74,396.94a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "A",
        "num": "M1136.1,405.45a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "A",
        "num": "M1081.52,293.58a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "A",
        "num": "M1147.32,312.55a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "A",
        "num": "M1184.1,295.52a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "A",
        "num": "M1223.58,280.81a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "A",
        "num": "M1258.42,264.16a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "A",
        "num": "M1293.65,249.45a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "A",
        "num": "M1321.13,295.9a6,6,0,1,0-6-6,6.07,6.07,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "A",
        "num": "M1261.52,322.23a6,6,0,1,0-6-6,6.08,6.08,0,0,0,6,6Z",
        "status": "porpintar"
    },
    {
        "letter": "A",
        "num": "M1187.19,354a6,6,0,1,0-6-6,6.06,6.06,0,0,0,6,6Z",
        "status": "porpintar"
    }
]

let paloClicked = {'letter':'','num':0 , 'status':''}
let rawPalo = {}


function loadJSON(){

}

function load(){
    const palos = document.getElementsByTagName('path')
    if(palos){
        Array.from(palos).forEach(paloPath=>{
            console.log(paloPath)
            let letter=paloPath.getAttribute("class").replace('cls-','')  
            newPalo = {
                letter: letter,
                num: paloPath.getAttribute("d"),
                status: 'porpintar'
            }
            if(!paloStatus.find(p=>p.num == newPalo.num)){
                console.log('NO DEBERIA SALIR')
                paloStatus.push(newPalo)
            }
        })
    }
    
    console.log(JSON.stringify(paloStatus))
}

document.addEventListener('click', (event)=>{
    rawPalo = event.target
    if (rawPalo.tagName == "path"){
        const botones = document.getElementById('botones')
        if(botones){
            // Mostrar botones
            botones.classList.add('seve')
            let letter=rawPalo.className.baseVal.replace('cls-','')        
            // guardar palo pulsado
            paloClicked = {
                letter: letter,
                num: rawPalo.getAttribute("d"),
            }
        }
    }
})

// se ejecuta cuando se pulsa un boton
function clickStatus(element, status) {
    paloStatus.find(p=>p.num == paloClicked.num).status = status;
    ['porpintar', 'pintado', 'amedias', 'nosepinta'].forEach(status=>{
        rawPalo.classList.remove(status)
    })
        rawPalo.classList.add(status)
    const botones = document.getElementById('botones')
    if (botones) {
        botones.classList.remove('seve')
    }
    
    //el array queda actualizado cada vez que se pulsa un palo y se pulsa un boton
    console.table(paloStatus)

    // TODO: hay que guardarlo en un json
    
}
