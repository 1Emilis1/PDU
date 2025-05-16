//  Pro Destruction Utility v1
// 
//  Made by 1Emilis
player.onTellCommand("!tp", function on_tell_command() {
    agent.teleport(pos(0, 0, 0), EAST)
    agent.teleportToPlayer()
})
player.onTellCommand("!stop", function on_tell_command2() {
    stop()
})
player.onTellCommand("!tntlite", function on_tell_command3() {
    
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    if (playerHasCheats == 0) {
        agent.setSlot(1)
        for (let index = 0; index < 8; index++) {
            if (nctnt1 == 1) {
                agent.move(BACK, 7)
                agent.move(RIGHT, 8)
                agent.move(UP, 1)
            }
            
            nctnt2 = 0
            nctnt1 = 1
            for (let index2 = 0; index2 < 8; index2++) {
                agent.setItem(TNT, 64, 1)
                if (nctnt2 == 1) {
                    agent.move(FORWARD, 1)
                    agent.move(RIGHT, 8)
                }
                
                nctnt2 = 1
                for (let index3 = 0; index3 < 8; index3++) {
                    agent.place(DOWN)
                    agent.move(LEFT, 1)
                }
            }
        }
    } else {
        blocks.fill(TNT, pos(0, 0, 0), pos(7, 7, 7), FillOperation.Replace)
    }
    
})
player.onTellCommand("!walktnt", function on_tell_command4() {
    
    stop()
    walktnt = 1
})
function stop() {
    
    walktnt = 0
    rainwalktnt = 0
    tntrain = 0
    tnttrail = 0
    wiper = 0
}

player.onTellCommand("!tnttrail", function on_tell_command5() {
    
    if (playerHasCheats == 1) {
        stop()
        tnttrail = 1
    } else {
        player.tell(mobs.target(LOCAL_PLAYER), "You need operator commands for this. Please run !cheats to enable.")
    }
    
})
player.onTellCommand("!tntrain", function on_tell_command6() {
    
    stop()
    tntrain = 1
})
//  enables slow/restricted mode for the people who don't have cheats or operator mode (common in classes and multiplayer)
player.onTellCommand("!nocheats", function on_tell_command7() {
    
    playerHasCheats = 0
    player.tell(mobs.target(LOCAL_PLAYER), "If you see this, you DO have cheats. Please type !cheats.")
})
loops.forever(function on_forever() {
    if (walktnt == 1) {
        agent.setSlot(1)
        agent.setItem(TNT, 64, 1)
        agent.teleportToPlayer()
        agent.place(DOWN)
    }
    
})
loops.forever(function on_forever2() {
    if (rainwalktnt == 1) {
        agent.setSlot(1)
        agent.setItem(TNT, 64, 1)
        agent.teleportToPlayer()
        agent.place(DOWN)
        agent.setSlot(2)
        agent.place(DOWN)
    }
    
})
loops.forever(function on_forever3() {
    if (tnttrail == 1) {
        agent.teleportToPlayer()
        blocks.fill(TNT, pos(0, 0, 0), pos(7, 7, 7), FillOperation.Replace)
    }
    
})
loops.forever(function on_forever4() {
    if (tntrain == 1) {
        agent.setSlot(1)
        agent.setItem(TNT, 64, 1)
        agent.place(DOWN)
        agent.setSlot(2)
        agent.place(DOWN)
        agent.setSlot(1)
        agent.move(RIGHT, 5)
        agent.place(DOWN)
        agent.setSlot(2)
        agent.place(DOWN)
        agent.setSlot(1)
        agent.move(RIGHT, 5)
        agent.place(DOWN)
        agent.setSlot(2)
        agent.place(DOWN)
        agent.move(LEFT, 10)
        agent.move(FORWARD, 5)
    }
    
})
loops.forever(function on_forever5() {
    if (wiper == 1) {
        agent.teleportToPlayer()
        blocks.fill(AIR, pos(0, 0, 0), pos(30, 30, 30), FillOperation.Replace)
    }
    
})
player.onTellCommand("!tntmini", function on_tell_command8() {
    
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    if (playerHasCheats == 0) {
        agent.setSlot(1)
        for (let index4 = 0; index4 < 4; index4++) {
            if (nctnt1 == 1) {
                agent.move(BACK, 3)
                agent.move(RIGHT, 4)
                agent.move(UP, 1)
            }
            
            nctnt2 = 0
            nctnt1 = 1
            for (let index5 = 0; index5 < 4; index5++) {
                agent.setItem(TNT, 64, 1)
                if (nctnt2 == 1) {
                    agent.move(FORWARD, 1)
                    agent.move(RIGHT, 4)
                }
                
                nctnt2 = 1
                for (let index6 = 0; index6 < 4; index6++) {
                    agent.place(DOWN)
                    agent.move(LEFT, 1)
                }
            }
        }
    } else {
        blocks.fill(TNT, pos(0, 0, 0), pos(3, 3, 3), FillOperation.Replace)
    }
    
})
player.onTellCommand("!rainwalktnt", function on_tell_command9() {
    
    stop()
    rainwalktnt = 1
})
player.onTellCommand("!tptobot", function on_tell_command10() {
    mobs.teleportToPlayer(mobs.target(LOCAL_PLAYER), mobs.target(MY_AGENT))
})
player.onTellCommand("help", function on_tell_command11() {
    player.tell(mobs.target(LOCAL_PLAYER), "Showing commands:")
    player.tell(mobs.target(LOCAL_PLAYER), "!cheats - Enables cheats for this bot, makes everything instant/faster.")
    player.tell(mobs.target(LOCAL_PLAYER), "!tnt - Prints out a Big (24x24) TNT cube (slow without cheats), 31x31 cube if theres cheats enabled.")
    player.tell(mobs.target(LOCAL_PLAYER), "!tntlite - Prints out a Medium (8x8) TNT cube (okay-ish speed without cheats), instant speed if you have cheats.")
    player.tell(mobs.target(LOCAL_PLAYER), "!tntmini - Prints out a Small (4x4) TNT cube (normal speed without cheats), instant speed with cheats.")
    player.tell(mobs.target(LOCAL_PLAYER), "!tnttrail (Cheats) (Unstable, Epilepsy Warning) - Leaves a 8x8 TNT Trail behind you, can crash the game if ignited.")
    player.tell(mobs.target(LOCAL_PLAYER), "!stop (IMPORTANT) - Stops actions. Does not work with TNT Cube printing commands, instead click the code button (robot button on touch devices)")
    player.tell(mobs.target(LOCAL_PLAYER), "!wiper (Cheats) - Makes things vanish, recommended to use in creative while flying. Needs 8+ Simulation Chunks to function fast.")
    player.tell(mobs.target(LOCAL_PLAYER), "!walktnt - Recommended to use while flying, leaves a single block TNT trail, cheats do nothing.")
    player.tell(mobs.target(LOCAL_PLAYER), "!rainwalktnt - Same as !walktnt but it ignites the TNT blocks.")
    player.tell(mobs.target(LOCAL_PLAYER), "!tp (IMPORTANT) - Teleports the bot to you, recommended in use with tntrain, and when printing TNT Cubes.")
    player.tell(mobs.target(LOCAL_PLAYER), "!tntrain - Makes TNT Rain, please use with !tp.")
})
player.onTellCommand("!wiper", function on_tell_command12() {
    
    if (playerHasCheats == 1) {
        stop()
        wiper = 1
    } else {
        player.tell(mobs.target(LOCAL_PLAYER), "You need operator commands for this. Please run !cheats to enable.")
    }
    
})
player.onTellCommand("!info", function on_tell_command13() {
    player.tell(mobs.target(LOCAL_PLAYER), "P.D.U made by 1Emilis")
    player.tell(mobs.target(LOCAL_PLAYER), "Currently hosted by " + player.name() + ".Agent" + " ")
})
player.onTellCommand("!fas", function on_tell_command14() {
    agent.collect(FLINT_AND_STEEL)
})
player.onTellCommand("!tnt", function on_tell_command15() {
    
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    if (playerHasCheats == 0) {
        agent.setSlot(1)
        for (let index7 = 0; index7 < 24; index7++) {
            if (nctnt1 == 1) {
                agent.move(BACK, 23)
                agent.move(RIGHT, 24)
                agent.move(UP, 1)
            }
            
            nctnt2 = 0
            nctnt1 = 1
            for (let index8 = 0; index8 < 24; index8++) {
                agent.setItem(TNT, 64, 1)
                if (nctnt2 == 1) {
                    agent.move(FORWARD, 1)
                    agent.move(RIGHT, 24)
                }
                
                nctnt2 = 1
                for (let index9 = 0; index9 < 24; index9++) {
                    agent.place(DOWN)
                    agent.move(LEFT, 1)
                }
            }
        }
    } else {
        blocks.fill(TNT, pos(0, 0, 0), pos(30, 30, 30), FillOperation.Replace)
    }
    
})
//  opposite of !nocheats (disabled on start)
player.onTellCommand("!cheats", function on_tell_command16() {
    
    playerHasCheats = 1
})
let wiper = 0
let tnttrail = 0
let tntrain = 0
let rainwalktnt = 0
let walktnt = 0
let nctnt2 = 0
let nctnt1 = 0
let playerHasCheats = 0
player.tell(mobs.target(LOCAL_PLAYER), "PDU 1.0 Loaded.")
player.tell(mobs.target(LOCAL_PLAYER), "Made by 1Emilis.")
player.tell(mobs.target(LOCAL_PLAYER), "Type \"/tell @s !help\" to get started.")
player.tell(mobs.target(LOCAL_PLAYER), "Operator Permissions detected.")
player.tell(mobs.target(LOCAL_PLAYER), "It is recommended to run !cheats.")
let username = player.name()
playerHasCheats = 0
