//  declaring all the variables;
var basket=$("#basket"),

container=$("#container"),
egg3=$("#egg3"),
egg2=$("#egg2"),
egg1=$("#egg1"),
eggs=$(".egg"),
egg_init_pos=parseInt(eggs.css("top")),
egg_current_pos=0,
floor=$("#floor"),
basket_height=basket.height(),
container_height=container.height(),
egg_height=eggs.height(),
egg_top=0,
basket_top=(container_height-basket_height),
your_score=$("#score"),
score=0;
score_1=("#score_1");
life_span=$("#life"),
life=15,
speed=1,
max_speed=10,
level=1,
your_level=$("#level"),
your_level.text(level);
life_span.text(life);
