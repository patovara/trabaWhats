async function enviarScript(scriptText) {
    const lines = scriptText
        .split(/[\n\t]+/)
        .map((line) => line.trim())
        .filter((line) => line);
    (main = document.querySelector("#main")),
        (textarea = main.querySelector(`div[contenteditable="true"]`));

    if (!textarea) throw new Error("No hay conversación abierta");

    for (const line of lines) {
        console.log(line);

        textarea.focus();
        document.execCommand("insertText", false, line);
        textarea.dispatchEvent(new Event("change", { bubbles: true }));

        setTimeout(() => {
            (
                main.querySelector(`[data-testid="Enviar"]`) ||
                main.querySelector(`[data-icon="Enviar"]`)||
                main.querySelector(`[aria-label="Enviar"]`)
            ).click();
        }, 100);

        if (lines.indexOf(line) !== lines.length - 1)
            await new Promise((resolve) => setTimeout(resolve, 250));
    }

    return lines.length;
}

enviarScript(`SHREK 2 COMPLETA SUBTITULADA PT-BR

Érase una vez, en un reino

muy lejos,

el rey y la reina estaban

Bendecido con una hermosa niña.

Y en todo el reino,

todos estaban felices...

Hasta que se puso el sol

y vieron que su hija había

sido maldecido con un terrible hechizo

que aparecía todas las noches.

Desesperados, buscaron el

ayuda de un hada madrina

quien les dijo que cerraran

la joven princesa en una torre,

a esperar el beso...

del apuesto Príncipe Azul.

Él sería quien se aventuraría.

en el peligroso viaje

a través del frío extremo

y desiertos abrasadores

viajando por muchos dias

y muchas noches,

arriesgando la vida y la integridad física

para llegar a la fortaleza del Dragón.

Porque él era el más valiente.

y la mas bella....

en todo el reino.

Y estaba destinado que tu beso

rompería la terrible maldición.

Solo subiría a la habitación más alta

desde la torre más alta

para entrar en los aposentos de la princesa,

dirigiéndose hacia tu silueta dormida,

descorre las cortinas diáfanas

para encontrarla...

¿Qué es?

- Princesa... ¿Fiona?

- ¡No!

Oh, gracias a Dios.

¿Donde esta ella?

- Está de luna de miel.

- ¿Luna de miel? ¿Con quien?

Entonces ella dijo,

¿Cuál es el problema, querida?

¿Cuál es el problema?

Yo no sé

Bueno tal vez estoy enamorado

Lo pienso,

todo el tiempo lo pienso

no puedo dejar de pensar en eso

El mas largo

¿Me llevará curar esto?

Sólo para curarlo,

porque no puedo ignorarlo

Y si es amor, amor

Me hace querer volver

y enfréntame

pero no se nada

sobre el amor

Oh, vamos, vamos

Gira un poco más rápido

Vamos vamos

El mundo seguirá después

Vamos vamos

Todos persiguen el amor

Por eso dije

soy una bola de nieve rodando

Entrando esta primavera

que trae todo este amor

Derritiéndose bajo el cielo azul

encadenado a la luz del sol

amor chispeante

Bueno bebe me rindo

Con helado de fresa

El interminable de todo este amor

Bueno, no era mi intención.

Pero no hay forma de escapar de tu amor

Estos rayos significan

que nunca estamos solos

Nunca solo, no, no

Vamos vamos

Salta un poco más alto

Vamos vamos

Si te sientes un poco más ligero

Vamos vamos

una vez estuvimos enamorados

Nos enamoramos accidentalmente

Accidentalmente Enamorado

Accidentalmente Enamorado

Accidentalmente

Estoy enamorado, estoy enamorado.

Estoy enamorado, estoy enamorado.

Estoy enamorado, estoy enamorado.

Accidentalmente Enamorado

Estoy enamorado

¡Qué bueno estar en casa!

Sólo tú y yo y...

- Dos pueden ser tan malos como uno...

- ¿Mudo?

¡Shrek! ¡Fiona! ¡Buenos ojos nos vemos!

Dame un abrazo, Shrek,

tu vieja máquina del amor.

Y mírese usted, señora Shrek.

¿Qué tal un terrón de azúcar para el corcel?

Burro, ¿qué haces aquí?

solo me estaba cuidando

desde tu nido de amor por ti.

Oh, quieres decir como... separar

el correo y regar las plantas?

- ¡Sí, y alimenta a los peces también!

- No tengo pescado.

Ahora tu tienes. Yo llamo a eso Shrek

y la otra Fiona.

Ese Shrek es un sinvergüenza.

Ven aquí tu...

Mira la hora.

Creo que será mejor que te vayas.

¿No quieres contarme sobre tu viaje?

¿Qué tal una partida de parchís?

Pero burro, no deberías

¿Estar en casa con Dragona?

Ah, sí, eso.

Yo no sé. ella ha estado caminando

gruñón últimamente.

Entonces pensé en mudarme

aquí contigo.

Burro, sabes que nos quedamos

Siempre feliz de verte.

Pero Fiona y yo ahora estamos casados.

Necesitamos algo de tiempo

ya sabes, estar juntos.

Sólo el uno con el otro.

Solos.

No digas nada más. No tiene

preocuparse por nada.

Siempre estaré aquí para asegurar

que nadie te moleste.

- ¡Mudo!

- ¿Si amigo?

Me estás fastidiando.

Oh, está bien. Muy bien, genial. Creo yo...

Pinocho y yo íbamos a un torneo.

De todos modos, entonces...

Tal vez te vea el domingo por

una barbacoa o algo así.

Estará bien. Ahora,

¿donde estábamos?

Oh.

Creo que lo recuerdo.

¡Mudo!

¡Yo sé yo sé! ¡Solos!

¡Voy! Voy.

Pero que quieres

¿Qué les dices a estos chicos?

Ya es suficiente, Reggie.

"Querida princesa Fiona.

"Se convoca así

al reino muy, muy lejano

"a un baile real

en celebración de tu boda

"en el que el rey

"dará su bendición real...

tu y los tuyos...

"um... Príncipe Azul."

"Con Amor, el Rey y la Reina

desde muy, muy lejos.

"También conocido como

Mamá y papá."

¿Mami y papi?

- ¿Príncipe Azul?

- ¿Baile real? ¿Puedo ir?

- Nosotros no vamos.

- ¿Qué?

¿Qué puedo decir, no crees?

que serían un poco...

... ¿sorprendido de verte así?

Bueno, pueden quedarse.

un poco sorprendido.

Pero ellos son mis padres,

Shrek. Ellos me aman.

Y no te preocupes.

Ellos también te amarán.

Pues si.

De alguna manera no creo

Seré bienvenido en el club regional.

Para con eso.

No son así.

Entonces, ¿cómo se explica lo del sargento Pomposo?

y la Banda das Calças Janotas?

¡Oh vamos! Dales al menos una oportunidad.

¿Hacer que? ¿Afilar tus tenedores?

¡No! ellos solo quieren

darte su bendición.

Ah, fantástico.

¿Ahora necesito su bendición?

Si quieres ser parte

de esta familia, si!

¿Quién dijo que querían?

ser parte de esta familia?

¡Tu dijiste! ¡Cuando te casaste conmigo!

Bueno, hay algunos hermosos.

¡pequeña impresión!

¿Entonces es eso?

¿No vienes?

Créelo. Esa es una mala idea.

¡No vamos! ¡Y eso es definitivo!

¡Vamos allá!

¡No queremos afectar el tráfico!

¡No te preocupes!

Nosotros nos encargamos de todo.

Oye, espérame.

¡Darle! ¡Mover! ¡Al frente!

¡Adelante, muévete! ¡Al frente!

¡Coirão! ¡Mover!

¡Al frente!

¡Mover! ¡Mover!

¡Al frente! ¡Coirão!

¡Montarlos! ¡Mover!

¡Al frente! ¡Mover! ¡Coirão!

¡Aplastarlos! ¡Terminalos!

¡Conviértelos en té! ¡Cómpreles una bebida!

¡Conoce a sus madres!

¡Sácales toda la leche!

¡Coirão!

- ¿Ya llegamos?

- No.

- ¿Ya llegamos?

- Todavia no.

- Ok, ¿ya llegamos?

- No.

- ¿Ya llegamos?

- ¡No!

- ¿Ya llegamos?

- Sí.

- ¿En serio?

- ¡No!

- ¿Ya llegamos?

- ¡No!

- ¿Ya llegamos?

- ¡Todavia no!

- ¿Ya llegamos?

- ¡No!

¿Ya llegamos?

No es gracioso. Es muy inmaduro.

Por eso a nadie le gustan los ogros.

¡Tú eres el que pierde!

- Dejaré de hablar.

- ¡Finalmente!

Esto está tardando una eternidad, Shrek.

No hay película de viajes ni nada.

El reino de lo lejano, muy lejano y tonto.

Ahí es donde vamos.

Mucho mucho...

... ¡lejos!

Está bien, está bien, lo entiendo.

Estoy tan molesto.

Bueno, encontrar una manera

para entretenerte.

Por cinco minutos...

Podrías dejar de ser tú mismo...

... ¡por cinco minutos!

¿Ya llegamos?

- ¡Sí!

- ¡Finalmente!

¡Guau!

Serán sólo deseos de champán y

sueños de caviar a partir de ahora.

Hola guapas!

¡Iremos a buscarlos más tarde!

tengo que mudarme a una ciudad

eso es correcto para mi

Definitivamente,

Ya no estamos en el pantano.

¡Para!

Bueno, hablo de eso, hablo de eso,

hablo de eso, hablo de eso

¡Oigan, miren todos!

Hablo de, hablo de cambiar...

¡Hola señoritas! Hermoso día

para una procesión, ¿eh? Bonito sombrero.

¡Quinielas!

¡Estrellas de cine!

Anunciando el tan esperado regreso

de la bella princesa fiona

y su nuevo marido.

Bueno, es ahora.

- Y ahora.

- Y ahora.

Y ahora.

Mmmm... ¿Por qué no vas?

Estaciono el auto.

Entonces...

...¿todavía crees que fue una buena idea?

¡Claro que sí! Mira, mami y papi

Parecen felices de vernos.

- ¿Quién demonios son ellos?

- Creo que es nuestro pequeño.

¡Ese no es pequeño!

Realmente es un gran problema.

Ella no debería besar al Príncipe

¿Encantado y romper el hechizo?

Bueno, él no es el Príncipe Azul.

pero parecen...

¿Feliz?

Vinimos, ya los vimos...

ahora vamos antes

encienden las antorchas.

- ¡Ellos son mis padres!

- ¡Te encerraron en una torre!

¡Ey! Esto era para mí...

¡Bien! Es nuestra oportunidad. Nosotros regresamos

dentro y fingir que no estamos ahí.

Harold, tenemos que ser...

¡Rápido! Mientras no están mirando

podemos salir de aquí.

¡Shrek, ya es suficiente!

Todo será...

¡Un desastre!

De ninguna manera...

- Tu consigues.

- Pero realmente yo...

- En realidad...

- Yo no... quiero... ser...

¡Aquí!

Mami papi...

Quiero que conozcas a mi marido...

Shrek.

Bueno, eh...

Ahora entiendo donde

Llega la belleza de Fiona.

Perdón.

Mejor afuera que adentro,

Eso es lo que siempre digo, ¿eh, Fiona?

Esto fue bueno.

Parece que no...

¿Qué es eso de "no en la lista"?

No me digas que no sabes quién soy.

¿Como estan todos?

Gracias por esperar.

- Fue difícil encontrar este lugar.

- ¡No! ¡No! Impresionante. Malo. ¡Fuera!

¡No, papá! Esta todo bien.

Él está con nosotros.

- Me ayudó a rescatarme del dragón.

- Soy yo: El noble corcel.

¡Empleado! ¿Qué tal uno?

cuenco para el corcel?

¡Oh no!

- ¿Shrek?

- ¿Sí?

¡Oh, lo siento!

Deliciosa sopa, Sra. R.

No no. Estimado.

¡Oh!

Entonces Fiona, cuéntanos

¿Cómo es el lugar donde vives?

Bien...

Shrek tiene su propia tierra.

- ¿No es querido?

- Oh si.

esta en un bosque encantado

donde abundan las ardillas

y lindos patitos y...

¿Qué?

Definitivamente no lo eres

hablando del pantano.

Un ogro del pantano.

¡Ay que originales!

supongo que es un buen lugar

criar niños.

es un poco temprano

para pensarlo, ¿no?

- De hecho. Recién comencé a comer.

-¡Harold!

- ¿Que quieres decir con eso?

- Papá, es genial, ¿vale?

- ¡Para tu tipo, sí!

- ¿Mi tipo?

Tengo que ir al baño.

- La cena está servida.

- Déjalo ahí. Yo aguanto.

¡Buen provecho!

¡Ay, comida mexicana!

¡Mi favorito!

No nos quedemos sentados con

royendo el estómago. Ataque.

Allá voy, Lilian.

Supongo que los nietos que

Puedo esperar de usted que sean...

¡Ogros, sí!

No es que haya nada malo en eso.

¿Verdad, Harold?

¡Oh no! ¡No! ¡Claro que no!

Es decir, suponiendo que no

¡Cómete a tus propios hijos!

¡Padre!

Oh no, preferimos los que estaban.

¡Encerrado en una torre!

- ¡Shrek, por favor!

- Sólo lo hice porque la amo.

Oh si, una guardería o un castillo.

custodiado por un dragón!

Nunca lo entenderías.

¡No su padre!

es tan bueno tener familia

reunidos para cenar.

- ¡Harold!

- ¡Shrek!

- Fiona!

- Fiona!

- ¡Mami!

-Harold...

¡Mudo!

Tus lágrimas derramadas

me llamaron

Así que aquí está mi dulce medicina.

se que todo

las princesas necesitan

Para vivir una vida feliz...

Oh Dios mio.

Oh, mírate.

Tu eres todo...

...creciendo.

- ¿Quién eres tú?

- ¡Oh, dulzura!

Soy tu Hada Madrina.

- ¿Tengo un Hada Madrina?

- Shh, shhh.

No te preocupes.

Estoy aquí para mejorarlo todo.

Sólo con un...

Onda de mi varita mágica

Tus problemas pronto desaparecerán

Con solo un gesto y un brillo

destruirás a un príncipe con mucho dinero

Un vestido muy caro

hecho sólo por ratones

Unas zapatillas de cristal

y no más estrés

Tus preocupaciones desaparecerán

tu alma será limpiada

Confía en tus amigos móviles

Te ayudamos a lanzar una nueva moda

- ¡Te hago hermosa, te hago increíble!

- ¡La clase de chica que le gustaría a un príncipe!

Ellos escribirán tu nombre

en la pared del baño...

"Por la felicidad eterna,

¡Llama a Fiona!

Un carro deportivo con estilo,

Conductor muy sexy, Kyle.

Elimino tus defectos, perdida de dientes.

La celulitis de los muslos desaparecerá.

Y ¡ay, qué diablos!

¡Toma un perro rizado!

Se aprieta y se contrae, aquí y allá, para

rockea al príncipe con el cabello perfecto

Lápiz labial, sombra de ojos, rubor para

atrapa al principe con el culo sexy

Día de suerte, "buffet" de nenas.

Tú y el príncipe dan un salto mortal en el heno.

Puedes dar un paseo alrededor de la luna.

con el príncipe al son de la música

No seas tacaño, lucirás fabulosa.

Tu príncipe tendrá una barriga firme

Soufflé de queso, San Valentín

¡Come pollo fricasé!

Se aprieta y se contrae, aquí y allá, para

rockea al príncipe con el cabello perfecto

¡Detener!

Mirar...

Muchas gracias,

Hada madrina,

pero realmente no lo necesito

de todo esto.

- Muy bien. Como quieras.

- Tú tampoco nos agradaste.

¿Fiona? ¿Fiona?

¡Oh! ¿Conseguiste un cachorro?

En mi habitación solo encontré champú.

Ah, eh...

Hada Madrina, muebles...

Quiero que conozcas a mi marido, Shrek.

¿Tu marido? ¿Qué? ¿Qué dijiste?

¿Cuando esto pasó?

Shrek fue quien me salvó.

- Pero eso no puede ser correcto.

- ¡Genial, más familiar!

Ella sólo está tratando de ayudar.

¡Bien! Ella puede ayudarnos a hacer las maletas.

Bebé, toma tu abrigo. Vamos.

- ¿Qué?

- No quiero irme.

¿Cuándo decidiste esto?

- Poco después llegamos.

- Mira, lo siento...

No está todo bien.

Tengo que irme de todos modos.

Pero recuerda, cariño.

Si alguna vez me necesitas...

La felicidad...

está a sólo una lágrima de distancia

de distancia.

Gracias, pero tenemos todos.

la felicidad que necesitamos.

Feliz feliz feliz...

Estoy a ver.

Vamos, Kyle.

Muy lindo, Shrek.

¿Que pasó? te lo dije

Venir aquí fue una mala idea.

Al menos podrías haberlo intentado

tener una relación con mi padre.

No creo que lo hubiera hecho

La bendición de papá

incluso si la quisiera.

¿No crees que sería amable si alguien

Preguntame que quiero?

Claro. ¿Quieres que haga?

las bolsas para ti?

¡Eres increible!

Te estás comportando como...

- ¡Vamos! ¡Dice!

- ¡Como un ogro!

¡Aquí tienes nuevas noticias!

Les guste o no a tus padres...

¡Soy un ogro!

¿Y adivina qué princesa?

Esto no va a cambiar.

Cambié por ti, Shrek.

Piénsalo.

Eso fue muy suave, Shrek.

"¡Soy un ogro!"

Sabía que esto iba a suceder.

Claro.

Tú fuiste quien lo empezó.

No puedo creer esto, Lilian.

Él es el ogro. No me.

Harold, creo que estás tomando

Esto es muy personal.

Esta fue la elección de Fiona.

Pero ella debería elegir al príncipe.

que elegimos para ella.

Quiero decir, ¿esperas que te dé?

¿Mi bendición para esta... cosa?

Fiona espera. y ella nunca

Te perdonaré si no lo haces.

Harold, no quiero perder.

mi hija otra vez.

Oh, actúas como amor

Era completamente predecible.

¿No recuerdas cuando

¿Éramos jóvenes?

Solíamos caminar

junto al estanque de lirios y...

- ...estaban floreciendo.

- Nuestro primer beso.

¡No es la misma cosa!

Creo que todavía no te das cuenta de eso

¡Nuestra hija se casó con un monstruo!

Oh, deja de ser un rey tan dramático.

¡Está bien! finge que no hay

nada mal.

¡La, di, da, di, da!

¡Todo es maravilloso!

Me gustaba saber

¿Cómo podría empeorar aún más?

Hola Harold.

- ¿Que pasó?

- ¡Nada, cariño!

Es solo mi vieja herida

de las cruzadas para hacer las tuyas propias!

solo lo estiraré

aquí por un tiempo.

será mejor que entres

Necesitamos hablar.

De hecho, Hada Madrina,

Me iba a ir a la cama ahora.

Ya tomé mis pastillas y

Me dan un poco de sueño.

¿Y qué si... hiciéramos esto?

en una visita rápida. ¿Qué?

Oh hola.

Entonces, ¿noticias?

¿Te acuerdas de mi hijo?

¿Príncipe Encantador?

Encantada, ¿verdad? ¡Dios mio!

Han pasado muchos años.

¿Cuando tu volviste?

Oh, hace unos cinco minutos,

en verdad.

Después de soportar huracanes,

desiertos ardientes...

Subí a la habitación más alta

en la torre más alta...

Mami se encarga de esto.

Soportó huracanes,

desiertos ardientes!

Subió al maldito cuarto más alto.

desde la maldita torre más alta...

¿Y qué encontró?

Un tipo de lobo travestido que

Me dijo que su princesa...

- Si yo pudiera...

- Ya estaba casado.

No fue mi culpa.

No llegó a tiempo.

¡Detén el carruaje!

Haroldo.

Me estás obligando a hacer

algo que no quería hacer.

¿Dónde estamos?

Hola, bienvenido a Frei Gorducho.

¿Puedo anotar su pedido?

Mi dieta está arruinada.

Espero que seas feliz. Eh... está bien.

Dos sándwiches renacentistas,

sin mayonesa... aros de chile...

- Quiero el Menú Medieval.

- Sí, un menú medieval y, Harold...

- ¿Buñuelos enrollados?

- No gracias.

- ¿Un taco de mierda fermentada, entonces?

- En serio no quiero nada.

Tu petición del Hada Madrina.

Y esto viene con el Menú Medieval.

Tómalo cariño.

Hicimos un trato, Harold. Y asumo que

No quiere que vuelva de mi parte.

De hecho, no.

Entonces, Fiona y Encantada

permanecerán juntos.

- Sí.

- Créeme, Harold. Es lo mejor.

No sólo para tu hija...

...sino para tu Reino.

¿Qué se supone que debe

¿Qué hago al respecto?

Use su imaginación.

Oh...

Entre, Su Majestad.

me gusta mi ciudad

Con una pequeña gota de veneno

Nadie sabe...

Perdon.

¿Sé que el?

No, debes estar confundiéndome.

con alguien más.

Eh... lo siento.

Estoy buscando a la hermanastra fea.

¡Oh! Ahí está. Bien.

Sabes, necesitaba eso

cuidar la salud de alguien.

- ¿Quien es el chico?

- Bueno, digamos que no es un chico.

Es un ogro.

Oye amigo déjame dártelo.

una pista.

Sólo hay un tipo capaz de hacer frente a

Trabaja así y, sinceramente...

...no le gusta que lo molesten.

¿Dónde puedo encontrarlo?

¿Hola?

¿Quién se atreve a entrar a mi habitación?

¡Perdon! Espero no interrumpir pero

Me dijeron que tengo que hablar contigo

¿Sobre un problema con un ogro?

Le dijeron bien.

Pero para eso,

Cobro mucho dinero.

¿Será esto suficiente?

Acabo de contratar el mio

valiosos servicios, Su Majestad.

Sólo dime dónde

Puedo encontrar a este ogro.

Todos me dicen,

que me estoy desmoronando

Todos me dicen,

tienes que dejarlo ir

tienes que dejarlo ir

Necesito dormir un poco.

Es hora de descansar el caballo.

Estoy demasiado involucrado.

Y las ruedas siguen rodando

Todos me dicen,

tienes que dejarlo ir

Querido Caballero,

Rezo para que aceptes

este recuerdo como señal

de mi agradecimiento.

Querido diario...

La Bella Durmiente

una fiesta de pijamas mañana por la noche,

pero mi padre dice que no puedo ir.

Nunca me deja salir después del atardecer.

Papi me dijo que voy a salir

durante algún tiempo.

debe ser como algo

terminando la escuela.

mamá dice cuando

tiene edad suficiente,

mi hermoso principe azul

Me rescatará de mi torre

y tráeme de vuelta

para mi familia.

Y todos viviremos

felices para siempre.

La señora Fiona encantada.

La señora Fiona encantada.

Perdon. espero no serlo

interrumpiendo cualquier cosa.

No no. justo estaba leyendo...

Mmm... un libro terrorífico.

Esperaba que te disculparas por mi

comportamiento deplorable en este momento.

- DE ACUERDO...

- No sé qué me pasó.

¿Crees que podríamos fingir lo contrario?

no pasó nada y empezamos de nuevo...

- Mire, Su Majestad, yo sólo...

- Por favor. Llámame padre.

Padre, ambos actuamos.

como ogros.

Tal vez sólo necesitamos algo de tiempo

para llegar a conocer unos a otros.

¡Excelente idea! En realidad esperaba que tú

Únase a mí para una cacería matutina.

¿Un poco de tiempo entre padre e hijo?

Sé que eso significaría

Enorme para Fiona.

digamos, 7:30

al pie del viejo roble?

¡Tómalo, burro!

Estamos perdidos.

No podemos estar perdidos. Seguimos

las instrucciones del Rey en detalle.

¿Que dijo el? "Ir hacia

a la parte más oscura del bosque..."

"Pasa a través de los árboles siniestros

con ramas aterradoras."

- ¡El arbusto con forma de Shirley Bassey!

- ¡Ya lo hemos pasado 3 veces!

Fuiste tú quien dijo

No preguntamos por el camino.

Oh, espléndido. Mi hipótesis de

hacer las cosas bien con el padre de Fiona

y termino perdido

en el bosque contigo!

¡No te ofendas por mí!

Sólo estoy tratando de ayudar.

¡Yo se! Yo se.

- Lo siento, ¿vale?

- Oye, no te preocupes por eso.

Realmente necesito hacerlo bien

cosas con este chico.

Si claro. Vamos allá

crear vínculos con papá.

Bueno, bueno, bueno, Burro.

Sé que fue un momento tierno

hace un momento, pero ¿ronroneando?

¿Qué? No ronroneé.

Sí. ¿Qué sigue?

¿Un abrazo?

Hola, Shrek. Los burros no ronronean.

¿Qué crees que soy? Una especie de...

¡Enfréntame si te atreves!

¡Mirar! Un gatito.

- ¡Cuidado, Shrek! ¡Está armado!

- Es un gato, Burro.

Ven aquí, gatito.

Vamos, gatito. Vamos.

Oh, ven aquí, gatito.

- ¡Espera Shrek! ¡Estoy en camino!

- ¡Rápido! ¡Eliminar el! ¡Eliminar el!

Oh, Dios, oh...

¡No!

- ¡Cuidado, Shrek! ¡Silencio!

- ¡Eliminar el!

¡Shrek! ¡No te muevas!

- ¿Fallé?

- No. Los golpeaste.

Ahora, ogro, ruega por

misericordia para...

¡El gato con botas!

¡Mataré a ese gato!

- Bola de pelo.

- ¡Oh! ¡Eso es asqueroso!

¿Qué debemos hacer con él?

Yo digo que tomemos la espada

¡Y lo cubriremos aquí mismo!

¡No! ¡Por favor!

¡Por favor!

¡Te lo ruego!

No fue nada personal, señor.

solo lo estaba haciendo

para mi familia.

Mi madre está enferma.

¡Y mi padre vive de la basura!

El Rey me ofreció mucho oro y yo

Tengo una camada de hermanos...

¡Pará pará pará!

El padre de Fiona te pagó

¿para hacer esto?

¿El rey rico? Sí.

Bueno ahí va

Bendición Real de Papá.

No te sientas mal. Casi todos

Quien te conoce quiere matarte.

Hola hombre, gracias.

Tal vez Fiona estaría mejor si yo fuera.

una especie de príncipe azul.

Eso es lo que dijo el Rey.

Oh, eh... lo siento. Pensé que

esta pregunta fue dirigida a mí.

Shrek, Fiona sabe que lo harías.

cualquier cosa por ella.

Bueno, no es que yo

No cambiaría si pudiera.

Yo sólo... sólo desearía poder

hazla feliz.

Espera un minuto...

"Felicidad."

"A una lágrima."

¡Mudo! Piensa en lo más triste

¡Eso ya te ha pasado!

Eh, hombre, ¿por dónde empiezo?

Primero fue aquel momento en que el viejo granjero

Intentó cambiarme por algunos frijoles mágicos.

Entonces ese idiota hace una fiesta y dice

a los invitados que me meten el culo en el culo.

Luego se emborracharon y empezaron

pegándome con un palo y gritando "¡Piñata!"

¿Qué es una "piñata"?

¿después de todo?

¡No, burro! ¡Necesito que llores!

No te proyectes en mí.

Sé que te sientes mal

pero tienes que...

Tu pequeño peludo

bolsa para comer basura...

¿Qué? ¿Está conectado? ¿Está conectado?

Soy el Hada Madrina.

estoy lejos de mi escritorio

u ocupado con un cliente.

Pero si vienes a la oficina, tendremos

Estaré encantado de concertarle una cita.

Que tengas un "felices para siempre".

Oh...

¿Estás preparado para una pequeña misión, Burro?

¡Así es como es! Shrek y el burro

en otra increíble aventura.

¡Nadie nos detiene ahora! ¡Guau!

¡Estamos en camino!

- ¡Detente, ogro! Te juzgué mal.

- Únete al club. Tenemos abrigos.

Por mi honor, estoy obligado a

acompañarte hasta haber salvado tu vida

desde que perdonaste el mío.

La posición del animal parlante.

molesto ya ha sido ocupado.

Vamos, Shrek. ¿Shrek?

- ¡Shrek!

- Oh, vamos, Burro. Míralo...

... con sus botitas.

¿Sabes cuántos gatos pueden usar botas?

Honestamente.

- ¡Quedémoslo!

- ¿Repetir?

Escuchando. ¡Está ronroneando!

- Ah, ahora es amado.

- Cálmate, Burro. Cálmate.

¿Tranquilízame? ¿Debería calmarme?

¡Mira quién le dice a quién que se calme!

¡Shrek!

¿Shrek?

Ambos son alegres, ¿no?

¿Qué opinas, Harold?

Mmm... Sí, sí.

Bien. Bien.

Al menos intenta fingir que estás interesado.

en el baile de bodas de su hija.

Honestamente, Lilian,

Creo que no importa.

Como sabemos

que habrá baile?

Madre padre.

- Hola, cariño.

- ¿Qué pasó, Cedric? ¡Bien! Ya voy.

Mamá, ¿has visto Shrek?

No lo vi.

Deberías preguntarle a tu padre.

Y usa palabras cortas, cariño.

Está un poco lento esta mañana.

- ¿Puedo ayudarle, Su Majestad?

- ¡Ah sí!

¡Mmm! Exquisito.

¿Cómo se llama este plato?

Ese sería el desayuno del perro.

Su Majestad.

Ah sí. Muy bien.

Sigue adelante, Cedric.

- ¿Padre? Papá, ¿has visto Shrek?

- No querida.

Estoy seguro de que solo estaba buscando

un bonito... agujero de barro para calmarse.

Ya sabes, después de tu discusión.

ayer por la noche.

Oh, ¿escuchaste eso?

Todo el reino te escuchó.

Quiero decir, después de todo, es

de su naturaleza, ser...

...bueno, un poco grosero.

¿Él? Bueno, no exactamente te acercaste a él.

la alfombra de bienvenida.

Bueno, ¿que esperabas?

Mira bien lo que te hizo.

Shrek me ama por lo que soy.

Pensé que estarías feliz por mí.

Bebé, sólo estoy pensando

lo que es mejor para ti.

Quizá deberías de hacer lo mismo.

¿No? ¿En serio?

Oh no. Es la antigua fábrica Keebler.

Retrocedamos lentamente.

Esa es la casa del Hada Madrina.

Es el mayor fabricante

de brujería y pociones de todo el reino.

¿Y por qué no entramos?

¿por un ratito? ¡Ja ja! ¡Un poco!

Él me hace reír.

Hola, estoy aquí para ver el...

El Hada Madrina.

Lo siento pero ella no está aquí.

Jerónimo.

Café y un Montecristo. ¡Ahora!

Sí, Hada Madrina.

Es para ya.

Mira, ella no contesta hoy.

No hay clientes, ¿vale?

Está bien, amigo.

Somos del sindicato.

¿Sindicato?

Representamos a trabajadores de todos

las industrias mágicas, tanto malas como buenas.

¡Oh! Correcto.

¿Te sientes de alguna manera

¿explotados u oprimidos?

Eh... un poco.

Ni siquiera tenemos dentista.

Ni siquiera tienen dentista.

Bien, solo echaremos un vistazo.

Oh por cierto.

Creo que sería mejor si el Hada Madrina

No sabía que estábamos aquí.

- ¿Entiendes lo que te estoy diciendo? ¿Mmm?

- ¡Para!

- Claro. Adelante.

Una gota de deseo.

¡Embaucador!

Un poco de pasión.

Y un poquito de...

... lujuria!

Permiso.

Perdón por entrar así...

¿Que demonios estas haciendo aquí?

Bueno, parece que Fiona no

es realmente feliz.

¿Y hay alguna duda de por qué?

Bueno, exploremos eso, ¿de acuerdo?

Oh. P-P-P...

Princesa. Cenicienta.

Aquí está.

"Vivieron felices para siempre". Oh...

No hay ogros.

Vamos a ver. Blanca Nieves.

Un príncipe apuesto, no un ogro.

La bella Durmiente. Sin ogros.

¿Joãozinho y María? ¡No!

¿Miniatura? No.

El pájaro dorado, La sirenita,

El sueño de una mujer...

¡No no no no no!

Ya ves, los ogros

No viven felices para siempre.

Bien. ¡Mira, señora!

No me apuntes...

Esas salchichas verdes y sucias.

Tu Montecristo y café.

¡Oh! Lo siento.

Ah... está bien.

Recién nos íbamos.

Lo siento, desperdicié

su tiempo, señor madrina

Solo vamos.

Vamos muchachos.

Gracias a Dios es Viernes,

¿eh amigo?

Trabajando duro

o no funciona, ¿verdad?

"Sala de pociones"

Quítate las botas y tu

mejillas de gato de mi cara.

¡Hombre, esto apesta!

No hueles exactamente

a una canasta de rosas.

- Bueno, uno de estos tiene que ayudar.

- ¡Ya estaba aquí preparando un plan!

Nuestras cabezas ya están

funcionando como uno solo.

Para para. Si necesitamos un experto

al lamernos, te llamamos.

Shrek, esta es una mala idea.

Mirar. Hazte útil y sigue mirando.

Coño, ¿crees que puedes hacerlo?

llegar a los que están en la cima?

No hay problema, jefe.

En una de mis nueve vidas,

Yo era el gran gato ladrón

de Santiago de Compostela.

Shrek, ¿estás loco?

Tonto, sigue buscando.

¿Sigo mirando?

Sí, seguiré buscando.

Voy a ver a esa bruja venir aquí y pegarte

Un mundo de dolor en tu trasero.

Yo también me reiré.

Me estaré riendo para mis adentros.

- ¿Que ves?

- Suavizante para piel de rana.

Estoy seguro de que un BM es la solución perfecta.

por problemas matrimoniales.

- ¿Elfo Seltzer?

- Na-na.

- ¿Hex Laxo?

- ¡No! Prueba "agradable".

Lo siento. No hay belleza.

¡Ey! ¿Y qué tal "Felices para siempre"?

bueno, que haces?

Dice "Belleza Divina".

En algunas culturas, los burros son considerados

como la más sabia de las criaturas

Especialmente aquellos que hablan,

como yo.

¡Mudo!

Esto tendrá que ser suficiente.

Tenemos compañía.

¿Podemos caminar con esto?

¡Apresúrate!

¡Bien atrapado, burro!

¡Finalmente!

Un buen uso para tu boca.

¡Vamos!

tu desprecias el mio

emociones naturales

Me haces sentir como la tierra

y estoy herido

Y si comienzo un disturbio

Corro el riesgo de perderte

y eso es lo peor

¿Alguna vez te has enamorado de alguien?

alguna vez te enamoras

Enamorarse de alguien,

Alguna vez te enamoraste

Enamórate de quien

no debería haberse enamorado

¿Alguna vez te has enamorado de alguien?

alguna vez te enamoras

Enamorarse de alguien,

Alguna vez te enamoraste

Por quién

no debería haberse enamorado

Enamorarse de

¿Alguna vez te has enamorado de alguien?

no debería haberse enamorado

No me importa quién tiene la culpa.

¡Intenta limpiar todo esto!

Y que alguien me traiga algo bien frito.

¡y cubierto de chocolate!

- ¡Madre!

- Encantador, querida.

No es un buen momento

Mami está trabajando.

¿Que pasó aquí?

- ¡El ogro, eso era!

- ¿Qué? ¿Dónde está, mamá?

te arrancaré la cabeza

¡fuera de tus hombros!

¡Te destruiré dondequiera que estés!

Él se arrepentirá del día

en el que me robó el reino!

¡Oh, guárdalo, Junior!

Aún vas a ser un rey.

Sólo tenemos que pensar en

algo más inteligente.

Perdon. Mmm...

Todo está comprobado, Hada Madrina,

con la excepción de una poción.

¿Qué?

Oh...

Creo que podemos hacer esto

a nuestro favor.

"Poción felices para siempre.

Fuerza máxima.

Para ti y para

tu verdadero amor.

Si uno de ustedes bebe esto,

ambos estarán bien.

Felicidad, consuelo y belleza divina."

- ¿Estarán bien los dos?

- Significa que también afectará a Fiona.

Oye, hombre, esto no me huele bien. Los mios

Todos los sentidos del burro tintinean.

Deja ese frasco de vudú

y vámonos de aquí.

Dice "Belleza Divina".

¿Qué tan malo puede ser?

Mira, eres alérgico a esas cosas.

Vas a tener una reacción.

Y si crees que voy a difundir Vapor Rub

en tu pecho, piensa mejor!

Jefe, por si acaso hay

algo anda mal con la poción...

déjame tomar el primer sorbo.

Sería un honor tener la oportunidad.

mi vida por ti.

Oh no no. No me parece.

Si va a haber algún animal ***,

déjalo ser en mí.

Este es el papel del mejor amigo.

Vamos, dame la botella.

¿Cómo te sientes?

No me siento diferente.

¿Me veo diferente?

Todavía me pareces un idiota.

Quizás no funcione con burros.

- Bueno, la nuestra, Fiona.

- ¿Shrek?

- Si bebes eso, no hay retorno.

- Yo se.

- ¿No revolcarse en el barro?

- Yo se.

- ¿No te pica el trasero?

- ¡Yo se!

- ¡Pero te encanta ser un ogro!

- ¡Yo se!

Pero amo más a Fiona.

¡Shrek, no! ¡Esperar!

Tiene que ser... Creo que lo entendiste.

la poción "Farty Forever".

Quizás no sea bueno.

O tal vez Fiona y yo nunca

estábamos destinados a estar juntos.

UH oh. ¿Qué te dije?

Siento que algo se acerca.

No quiero morir.

No quiero morir. ¡No quiero morir!

Oh Dios mío.

¡Me estoy derritiendo!

¡Me estoy derritiendo!

Es sólo la lluvia, Burro.

Oh.

No te preocupes. las cosas parecen mal

porque está oscuro y lluvioso

y el padre de Fiona contrató a un asesino

sucio para limpiar tu sebo.

Estará mejor mañana por la mañana.

Usted verá...

El sol aparecerá...

Mañana

Apuesta tu culo...

¿Apuesto mi trasero?

¡Ya voy, Isabel!

¿Mudo?

¿Estás bien?

- Hola jefe. Vamos a afeitarlo.

- ¿B-Burro?

¡Ahí tienes!

Te extrañamos en la cena.

¿Qué pasa, querida?

Padre...

He estado pensando en eso

lo que me dijiste.

Y voy a hacer las cosas bien.

¡Oh! ¡Excelente!

Esa es mi chica.

Fue un error traer a Shrek aquí.

Saldré a buscarlo.

Y luego volveremos al pantano

donde pertenecemos.

¡Fiona, por favor!

No te apresures, cariño.

No puedes ir a ningún lado ahora.

¡Fiona!

Escucha, te dije que estaba aquí.

¡Míralo! Silencio. Mírame.

Buenos días dormilón.

¡Buen día!

¡Amamos a tu gatito!

- Oh... Mi cabeza...

- Toma, traje un balde de agua.

Gracias.

¡Uhh!

¡Aahh!

Oh...

¿Una nariz linda y redondeada?

¿Cabello lleno y ondulado?

¿Glúteos firmes y redondos?

Yo... yo soy...

- ¡Magnífico!

- Lo diré.

Soy Jill. ¿Cual es tu nombre?

- Mmm... Shrek.

- ¿Shrek? Guau. ¿Eres de Europa?

- Estás tenso.

- Quiero masajearte los hombros.

- Yo me encargo.

- No tengo nada que frotar.

Ponerse en línea.

- ¿Has visto mi burro?

- ¿A quién llamas estúpido?

- ¿Mudo? Usted es un...

- ¡Un semental!

Puedo relinchar.

Puedo decirlo.

¡Mírame, Shrek!

¡Estoy trotando!

Esta es una poción de calidad.

¿Qué hay en esta cosa?

"Oh, no tomes la poción

Señor jefe, es muy malo".

¡Bah!

"Advertencia: Los efectos secundarios incluyen

ardor, picazón, sudoración, llanto.

"No recomendado para pacientes cardíacos o

aquellos... con trastornos nerviosos”.

Estoy trotando, estoy trotando

¡en el mismo lugar! ¡Sí!

¿Que pasó?

¿Señor? "Para hacer los efectos

de esta poción permanente,

quien lo haya bebido debe recibir un beso

de tu amado, hasta la media noche."

¿Media noche?

¿Por qué siempre a medianoche?

- ¡Elígeme! ¡Seré tu verdadero amor!

- Seré tu verdadero amor.

Seré sincero... suficiente.

Miren chicas

Ya tengo el amor verdadero.

Oh...

Y escuche lo que digo, jefe.

Tendrás una Princesa muy satisfecha.

Admitámoslo.

Eres un poco más agradable a la vista.

Por dentro eres igual

mezquino, salado...

- Calma.

- ... caprichoso, ofensivo,

ogro furioso que siempre fuiste.

Y sigues siendo el mismo imbécil molesto.

Sí.

Bien...

Cuidado, princesa.

Aquí viene el nuevo yo.

Lo primero es lo primero.

Necesitamos sacarte de esa ropa.

- ¿Listo?

- ¡Listo!

¡Conductor, deténgase!

¡Oh Dios! ¡Ayudame por favor!

¡Mis días de carrera han terminado!

¡Tengo una discapacidad visual! Di la verdad.

¿Volveré a tocar el violín algún día?

¡Pobre criatura!

¿Hay algo que

puede hacer por ti?

Bueno, creo que hay una cosa.

Quítate la peluca polvorienta

y quítate la ropa interior.

- Nada mal.

- No está mal.

¿Padre?

¿Está todo bien, papá?

¡Gracias caballero!

Un día te recompensaré.

A menos que, por supuesto,

No encontrarte ni olvidarme.

Oh si

Date la vuelta y enfrenta al extraño

Mu-Mu-Cambios

no quiero ser mas rico

Mu-Mu-Mu-Mu-Cambios

Date la vuelta y enfrenta al extraño

Mu-Mu-Cambios

solo tengo que ser

un hombre diferente

El tiempo puede cambiarme

Pero no puedo seguir el tiempo

¡Alto!

Dile a la princesa Fiona que su marido,

Señor Shrek, está aquí para verla.

todavía no sé qué

estaba buscando

Y mi tiempo pasó rápido

un millón de callejones sin salida

Todas las veces que pensé

quien había logrado

Me pareció que el sabor

no fue tan dulce

Mu-Mu-Mu-Cambios

- Date la vuelta y enfrenta al extraño.

-¡Fiona!

- ¿Shrek?

- Mu-Mu-Cambios

no quiero ser mas rico

El tiempo puede cambiarme

Pero no puedo seguir el tiempo

¿Fiona?

Hola guapo.

¡Shrek!

- ¡Princesa!

- ¿Mudo?

¡Guau! Esa poción también

¿Te funcionó?

¿Qué poción?

Shrek y yo tomamos

una poción mágica. Es bien...

¡Ahora somos sexys!

¿Shrek?

Para ti cariño... podría serlo.

- Eso. Tú querías.

- Burro, ¿dónde está Shrek?

Vino a buscarte.

¿Shrek?

¡Fiona! ¡Fiona!

¿Quieres bailar, guapo?

¿Te vas tan pronto?

¿No quieres ver a tu esposa?

¿Fiona?

¿Shrek?

Sí, Fiona. Soy yo.

¿Qué pasó con tu voz?

La poción ha cambiado.

Muchas cosas, Fiona.

Pero no lo que siento por ti.

¿Fiona?

- ¿Encantador?

- ¿Crees eso?

Papá, esperaba mucho.

aprobar.

- Mmm... ¿quién eres tú?

- Mamá, soy yo, Shrek.

Sé que nunca tendrás una segunda oportunidad

para una primera impresión,

pero bueno ¿tú qué opinas?

¡Fiona! ¡Fiona!

¡Fiona!

-¡Fiona!

-¡Fiona, Fiona! ¡Ho Ho Ho!

¡Ay armónica! no creo que ellos

¿Puedes oír, agapornis?

¿No crees que ya lo has arruinado?

¿Su vida es suficiente?

Sólo quiero que ella sea feliz.

Y ahora puede serlo.

Oh querido.

ella finalmente encontró

El Príncipe de tus sueños.

Pero mírame.

Mira lo que hice por ella.

Es hora de dejar de vivir

en un cuento de hadas, Shrek.

Ella es una princesa,

y eres un ogro.

Es algo que ninguno

La cantidad de la poción cambiará.

Pero...

Te quiero.

Si realmente la amas...

...vas a dejarla ir.

¿Shrek?

Señor.

¿Lo que se pasa?

¿Adónde vas?

No tienes nada que ver con esto.

¿Por qué no, Harold?

La gente realmente apesta

pienso esto

ya se entiende bien

Aquí tenéis, muchachos.

Deja la botella, Doris.

Ey. ¿Por qué esas caras tristes?

Todo fue sólo un error estúpido.

Nunca debí haberla salvado

desde esa torre primero.

Odio los lunes.

No puedo creer que me des la espalda

lo mejor que te ha pasado.

¿Qué posibilidades tengo?

Ella ama a ese chico guapo,

Príncipe Encantador.

Vamos. ¿Es tan hermoso?

¿Estás bromeando?

¡Él es lindo!

Tiene una cara que parece

que fue tallada por ángeles.

- Oh, parece un sueño.

- Sabes...

curiosamente esto no es

haciéndome sentir mejor.

Miren, muchachos.

És mejor asi.

Mamá y papá lo aprueban

y Fiona consigue al hombre

con quien siempre soñaste.

Todos ganan.

Excepto tu.

No entiendo, Shrek.

Amas a Fiona.

Bien.

Y es por eso

que tengo que dejarlo ir.

Lo siento, ¿está ella ahí?

Ella está... ahí atrás.

Ah, hola de nuevo.

Hada Madrina, Encantada.

Será mejor que tengas una buena razón por la cual

Arrástranos a este lugar, Harold.

Bueno, me temo que Fiona no es realmente...

de amor por el Príncipe Azul.

- P.S.I., no es mi culpa.

- No, claro que no, querida.

Quiero decir, ¿cómo puedo ser encantador?

cuando tengo que fingir

¿Será ese horrible ogro?

No no. Nadie tiene la culpa.

Tal vez sea mejor simplemente

Cancelamos todo, ¿verdad?

- ¿Qué?

- ¡No puedes obligar a nadie a enamorarse!

Permítanme discrepar.

¡Hago esto todo el tiempo!

Haz que Fiona beba esto y se enamorará.

por el primer hombre que besa,

quién será el Encantado.

- Hum no.

- ¿Qué dijiste?

No puedo. No lo haré.

Eso es todo.

Si recuerdas, fui yo quien te ayudo.

con tu "felices para siempre".

Y puedo quitármelo así

Tan fácilmente.

¿Es eso lo que quieres? ¿Y?

- No

- Lindo niño.

Ahora tenemos que irnos.

tengo que peinarme

de "Encantado" antes del baile.

No hay medicina.

Está todo levantado al frente.

No puede peinarlo hacia atrás.

Tenemos que encontrar a alguien que lo haga.

Gracias mamá.

¿Madre?

Mmm... ¡María!

¡Un caballo que habla!

¡El ogro!

¡Detennos! ¡Ladrones! ¡Bandidos!

¡Detennos!

Los abdominales se ven fabulosos

y el músculo glúteo en su máximo

esta noche aquí en Baile Real

¡Desde muy, muy lejos!

Los vagones están alineados

lo mejor de la sociedad saliendo de ellos

como cuajada y suero

de la señora Muffet.

todo lo que es importante

apareció

en honor a la princesa fiona

y el Príncipe Shrek.

Y ay que bien

¡Los vestidos son maravillosos!

¡Ver! Joãozinho y María!

¿Para qué diablos son las migajas?

Y justo detrás de ellos,

Pulgarcito y Pulgarcita.

¡Oh, no son adorables!

¡Aquí viene la Bella Durmiente!

Anciana cansada.

¿Quién es este? ¿Quién es este?

¿Quién es este?

Oh, es el número uno, es el único...

¡Es el Hada Madrina!

¡Hola, muy, muy lejos!

¿Puedo tener un "whoop whoop"?

Que todos tus finales

se feliz y...

¡Bueno, ya sabes el resto!

Volvemos con el Baile Real

desde muy, muy lejos

Después de estos anuncios.

Odio estos espectáculos de danza.

Me aburren hasta la muerte.

Cambiar a la rueda de la tortura

No cambio nada, señor,

Hasta que vi a Shrek y Fiona.

¡Aburrido es lo que eres!

Oye, ratas, pásame.

¡un ala de búfalo!

No, a tu izquierda. ¡A tu izquierda!

- Esta noche en "Caballeros"...

- ¡Este es un buen programa!

Tenemos un Bronco blanco dirigiéndose al este.

dentro del bosque. Pedimos refuerzos.

Es hora de que los Hombres de Acero demuestren

a estos mamíferos locos

que tus actitudes inconscientes

no quedan impunes.

¿Por qué me agarran?

¡Violencia policial!

¡Tengo que hablar con la princesa Fiona!

- ¡Te advertimos!

- ¡Ay! ¡Ay!

¿Se escaparán?

¿Alguien dejó salir al gato de la bolsa?

¡Perros cerdos capitalistas!

¡Sáquenmelo de encima!

- ¡Gataria! (hierba que provoca euforia en los gatos)

- Eso no es mío.

¡Encuentra a la princesa Fiona!

¡Soy un idiota!

Dile Shrek...

¡Soy su marido, Shrek!

¡Rápido! ¡Para atrás!

¡Soy su marido, Shrek! ¡Ay!

¿Estimado?

Oh. Bien me parecia

que aquí te encontraría.

¿Qué tal una taza caliente?

de té antes del baile?

Yo no voy.

Todo el reino apareció

para celebrar tu boda.

Sólo hay un problema.

Ese no es mi marido.

Es decir, míralo.

Sí, es un poco diferente.

pero la gente cambia

para quienes los aman.

Te sorprendería cuánto

Me cambié por tu madre.

¿Cambiar?

¡Perdió completamente la cabeza!

¿Por qué no bajas al baile?

y darle otra oportunidad?

Tal vez descubras que te gusta

de este nuevo Shrek.

Pero me enamoré del viejo.

Daría cualquier cosa por tenerlo de vuelta.

Estimado. Ese es mío.

Descafeinado.

De lo contrario, me quedo despierto toda la noche.

Gracias.

¡Tengo que salir de aquí!

¡No pueden arrestarnos así!

¡Déjame ir!

¿Qué pasa con mis derechos constitucionales?

Se supone que deben decir que tengo

el derecho a permanecer en silencio.

Nadie dijo que tenía derecho.

¡a guardar silencio!
Usted tiene derecho a permanecer en silencio.

Lo que te falta es la capacidad.

tengo que aguantar antes,

Yo también me vuelvo completamente loco.

¿Shrek? ¿Mudo?

Demasiado tarde.

¡Gingy! ¡Pinocho!

¡Sácanos de aquí!

Oh...

¡Rompiendo!

¡Presta atención a continuación!

¡Rápido! ¡Mentir!

- ¿Qué quieres que te diga?

- ¡Cualquier cosa, pero rápido!

Di algo loco como "Estoy

¡Usando ropa interior de mujer!"

Llevo ropa interior de mujer.

- ¿Eres?

- ¡Claro que no!

¡Ciertamente parece que lo eres!

- no lo soy en absoluto

- ¿De que tipo?

- ¡Es una tanga!

- ¡Guau! ¡Son ropa interior corta!

- No son nada.

- ¡Son sí!

Aquí vamos. Esperar.

¡Espera espera espera!

¡Ay! ¡Ay! ¡Hey hey hey!

¡Ay!

- ¿Lo siento?

- ¿Qué es? ¡Gatito!

Lo siento, pero ¿te importa?

para dejarme ir?

- ¡Lo siento jefe!

- ¡Deja de hacer travesuras!

¡Tenemos que detener ese beso!

Pensé que ibas a dejarla ir.

Iba a hacerlo, pero no puedo permitirlo.

Que le hagan esto a Fiona.

¡Auge! Eso es lo que me gusta escuchar.

¡Mira quién viene!

¡Es imposible!

Nunca podremos entrar.

El castillo está vigilado.

¡Hay un foso y todo!

Chicos, parece que estamos en el arroyo de

chocolate sin barra de helado.

- ¿Qué es?

- ¿Aún conoces al pastelero?

¡Muy claro!

Está en Drury Lane. ¿Por qué?

Porque vamos a necesitar harina.

Mucha, mucha harina.

¡Gingy!

¡Enciende los fogones, Pastelero! Tenemos una

¡Gran pedido para entregar!

¡Está vivo!

Corre corre corre,

¡tan rapido como puedas!

¡Vamos, hombre rico, vamos!

¡Ahí está, Mongo!

¡Al castillo!

¡No, gran pastel estúpido!

¡Vamos allá!

¡Mongo! ¡Aquí abajo!

¡Mira el pony!

¡Exactamente! ¡Sigue al hermoso pony!

La hermosa pony quiere jugar.

¡en el castillo!

Lindo pony.

Señoras y señores

Les presento a la princesa Fiona.

y su nuevo marido, el príncipe Shrek.

Shrek, ¿qué estás haciendo?

Estoy haciendo mi parte, Fiona.

¿Eso es brillo en tus labios?

Mmm. Sabor a cereza.

quieres probar?

- ¡Puaj! ¿Qué sucede contigo?

- Pero, cariño...

Do menor, comienza con do menor.

Señoras y señores.

Quería dedicar esta canción a...

Princesa Fiona y Príncipe Shrek.

Fiona, mi princesa.

¿Me concedes un baile?

Dónde han ido todos los hombres buenos

¿Y dónde están todos los dioses?

¡Bailar! ¡Bailar!

¿Dónde está el inteligente Hércules?

Para combatir la desventaja

¿creciente?

¿Desde cuándo bailas?

Fiona, querida,

Si hay algo que sé,

es ese amor

está lleno de sorpresas.

A través de la noche caminé

Y sueño con lo que necesito

¡Darle!

Necesito un héroe

¡Bien hecho, grandullón!

¡Vamos a rockear esta fiesta!

¡Hombres a las catapultas!

¡Apuntar! ¡Fuego!

- ¡Esperar!

- ¡Oh! ¡Hermoso!

¡No el botón de chicle!

¡Proyectil!

¡Ja ja! ¡Está bien!

En algún momento después de la medianoche,

En mis fantasías más salvajes

¡Vamos, Mongo! ¡Ir!

¡Hombres a los calderos!

Después de ti, Mongo.

- ¡Es eso! ¡Fortaleza!

- ¡Cuidadoso!

¡Shrek!

¡Más calor, menos espuma!

Arriba donde las montañas

conocer los cielos

Allí donde el relámpago rasga el mar

Podría jurar que hay alguien ahí

En algún lugar cuidándome

¡Fortaleza!

No...!

¡Vamos!

¡Cuidadoso!

Sé bueno.

¡Él me necesita!

¡Suéltame!

¡Mudo!

¡Gatito!

¡Ir! ¡Ir! tu doncella

¡te necesita! ¡Ir!

Hoy pago mi deuda.

Ooh...

¡En guardia!

el tiene que ser fuerte

Y tiene que ser rápido.

Y tiene que mantenerse fresco

despues de la pelea

Necesito un héroe

- ¡Detener!

- ¡Eh, tú! Manténgase alejado de mi esposa.

- ¿Shrek?

No podrías simplemente volver a

tu pantano y déjanos en paz.

- ¡Ahora!

- ¡Cerdos y mantas!

¡Pinocho! ¡Consigue la varita!

¡Veo Londres! ¡Veo Francia!

¡Guau!

¡Soy un chico de verdad!

¡Oh! ¡Oh! ¡Aaahhh!

¡Atrapalo!

¡Mudo!

¡Oh!

¡Soy un chico de verdad! ¡Ah!

¡Oh!

- ¡Hay!

- Oh.

¡Eso es mio!

Orad por piedad, por el coño...

¡Y burro!

¡Ella tomó la poción!

¡Bésala ahora!

¡No!

-Fiona.

-Shrek.

¡Harold! Se suponía que lo tendrías

dada la poción!

Bueno, parece que te di

el té equivocado.

- ¡Mami!

- ¿Mami?

Te lo dije.

Los ogros no viven felices para siempre.

¡Vaya!

¡Oh!

¡Ay, padre!

Él esta...?

Él graznó.

¿Harold?

¿Padre?

Esperaba que nunca lo hiciera

Me viste así.

- ¡Y no te lo puso fácil!

- ¡Mudo!

No, tienes razón.

Pido disculpas.

A ambos.

Sólo quería lo mejor para Fiona.

Pero ahora veo...

que ella ya lo tiene.

Shrek, Fiona...

acepta la disculpa

de una rana vieja...

y mi bendición?

¿Harold?

Lo siento, Lilian.

Sólo desearía poder ser

el hombre que te mereces.

Eres más de ese hombre hoy

de lo que alguna vez fuiste...

con todos sus defectos.

¡Jefe! ¡La poción "Felices para siempre"!

¡Media noche!

Fiona. ¿Es esto lo que quieres?

¿Será así para siempre?

- ¿Qué?

- Porque si me besas ahora...

podemos quedarnos así.

¿Podrías hacer eso?

- ¿Por mí?

- Sí.

quiero lo que sea

la princesa quiere.

Vivir feliz para siempre...

con el ogro con el que me casé.

Pase lo que pase,

¡No puedo llorar!

¡No puedes hacerme llorar!

¡Guau!

No no no.

Oh no.

¡Ey! Todavía me pareces uno

noble semental.

Bueno, ¿dónde estábamos?

Ya lo recuerdo.

¡Ey! no deberíamos ser

tener una "fiesta"?

¡Uno, de, cuatro, dáselo!

Coño y burro, todos...

Ella es supersticiosa.

Gatos negros y muñecos vudú.

- ¡Canta, coño!

- siento una premonición

Esa chica será mi fin.

¡Aquí vamos nosotros!

Ella está en una nueva sensación.

Nuevas patadas en el candelabro.

Ella tiene una nueva adicción.

Para todo el día y la noche

Ella te hará quitarte la ropa.

Y ve a bailar bajo la lluvia

Te hará vivir tu vida loca.

Pero te quitará el dolor

como una bala en tu cerebro

De cabeza para abajo

dentro y fuera

Viviendo la vida loca"

¡Oh belleza!

Viviendo la vida loca"

Tus labios son de un rojo diabólico

Y tu piel color moca

Ella te agotará

- Viviendo la vida loca"

- ¡Vive "loca"!

Viviendo la vida loca"

- ¡Dilo de nuevo ahora!

- Viviendo la vida loca"

¡Tonto, eso es español!

Ella te empujará y te arrastrará hacia abajo

Viviendo la vida loca"

Ella te agotará

Viviendo la vida loca"

Ella te empujará y te arrastrará hacia abajo

Viviendo la vida loca"

Tus labios son de un rojo diabólico

Y tu piel color moca

Ella te agotará

Viviendo la vida loca"

Solo

no quiero ser

solo, nunca más...

Hola amigo ya vamos

al Club KIT-KAT.

Vamos, únete a nosotros.

Gracias compadre.

No... no estoy de humor.

¡Te animamos!

¡Te conseguiremos un bonito burro!

¡Hola querido!

¡Es mi chica!

¡Eso! ¡Vamos allá!

Bebé, ¿dónde has estado?

Yo tambien lo siento.

Debería haberme quedado. pero shrek

Tuve que hacer esto.

¿Qué? Repita una vez más.

¿De qué estás hablando?

¿En serio?

¡Papá!

¡Mira a nuestros bebés mutantes!

tengo que conseguir un trabajo`);
