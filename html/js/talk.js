new TypeIt(".n0ts", {
    loop: true,
    cursorSpeed: 1000,
    speed: 100
})
    .type("I am AIww")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("欢迎来到我的Blog")
    .pause(3000)
    .go();