# Pro Destruction Utility v1
#
# Made by 1Emilis

def on_tell_command():
    agent.teleport(pos(0, 0, 0), EAST)
    agent.teleport_to_player()
player.on_tell_command("!tp", on_tell_command)

def on_tell_command2():
    stop()
player.on_tell_command("!stop", on_tell_command2)

def on_tell_command3():
    global nctnt2, nctnt1
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    if playerHasCheats == 0:
        agent.set_slot(1)
        for index in range(8):
            if nctnt1 == 1:
                agent.move(BACK, 7)
                agent.move(RIGHT, 8)
                agent.move(UP, 1)
            nctnt2 = 0
            nctnt1 = 1
            for index2 in range(8):
                agent.set_item(TNT, 64, 1)
                if nctnt2 == 1:
                    agent.move(FORWARD, 1)
                    agent.move(RIGHT, 8)
                nctnt2 = 1
                for index3 in range(8):
                    agent.place(DOWN)
                    agent.move(LEFT, 1)
    else:
        blocks.fill(TNT, pos(0, 0, 0), pos(7, 7, 7), FillOperation.REPLACE)
player.on_tell_command("!tntlite", on_tell_command3)

def on_tell_command4():
    global walktnt
    stop()
    walktnt = 1
player.on_tell_command("!walktnt", on_tell_command4)

def stop():
    global walktnt, rainwalktnt, tntrain, tnttrail, wiper
    walktnt = 0
    rainwalktnt = 0
    tntrain = 0
    tnttrail = 0
    wiper = 0

def on_tell_command5():
    global tnttrail
    if playerHasCheats == 1:
        stop()
        tnttrail = 1
    else:
        player.tell(mobs.target(LOCAL_PLAYER),
            "You need operator commands for this. Please run !cheats to enable.")
player.on_tell_command("!tnttrail", on_tell_command5)

def on_tell_command6():
    global tntrain
    stop()
    tntrain = 1
player.on_tell_command("!tntrain", on_tell_command6)

# enables slow/restricted mode for the people who don't have cheats or operator mode (common in classes and multiplayer)

def on_tell_command7():
    global playerHasCheats
    playerHasCheats = 0
    player.tell(mobs.target(LOCAL_PLAYER),
        "If you see this, you DO have cheats. Please type !cheats.")
player.on_tell_command("!nocheats", on_tell_command7)

def on_forever():
    if walktnt == 1:
        agent.set_slot(1)
        agent.set_item(TNT, 64, 1)
        agent.teleport_to_player()
        agent.place(DOWN)
loops.forever(on_forever)

def on_forever2():
    if rainwalktnt == 1:
        agent.set_slot(1)
        agent.set_item(TNT, 64, 1)
        agent.teleport_to_player()
        agent.place(DOWN)
        agent.set_slot(2)
        agent.place(DOWN)
loops.forever(on_forever2)

def on_forever3():
    if tnttrail == 1:
        agent.teleport_to_player()
        blocks.fill(TNT, pos(0, 0, 0), pos(7, 7, 7), FillOperation.REPLACE)
loops.forever(on_forever3)

def on_forever4():
    if tntrain == 1:
        agent.set_slot(1)
        agent.set_item(TNT, 64, 1)
        agent.place(DOWN)
        agent.set_slot(2)
        agent.place(DOWN)
        agent.set_slot(1)
        agent.move(RIGHT, 5)
        agent.place(DOWN)
        agent.set_slot(2)
        agent.place(DOWN)
        agent.set_slot(1)
        agent.move(RIGHT, 5)
        agent.place(DOWN)
        agent.set_slot(2)
        agent.place(DOWN)
        agent.move(LEFT, 10)
        agent.move(FORWARD, 5)
loops.forever(on_forever4)

def on_forever5():
    if wiper == 1:
        agent.teleport_to_player()
        blocks.fill(AIR, pos(0, 0, 0), pos(30, 30, 30), FillOperation.REPLACE)
loops.forever(on_forever5)

def on_tell_command8():
    global nctnt2, nctnt1
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    if playerHasCheats == 0:
        agent.set_slot(1)
        for index4 in range(4):
            if nctnt1 == 1:
                agent.move(BACK, 3)
                agent.move(RIGHT, 4)
                agent.move(UP, 1)
            nctnt2 = 0
            nctnt1 = 1
            for index5 in range(4):
                agent.set_item(TNT, 64, 1)
                if nctnt2 == 1:
                    agent.move(FORWARD, 1)
                    agent.move(RIGHT, 4)
                nctnt2 = 1
                for index6 in range(4):
                    agent.place(DOWN)
                    agent.move(LEFT, 1)
    else:
        blocks.fill(TNT, pos(0, 0, 0), pos(3, 3, 3), FillOperation.REPLACE)
player.on_tell_command("!tntmini", on_tell_command8)

def on_tell_command9():
    global rainwalktnt
    stop()
    rainwalktnt = 1
player.on_tell_command("!rainwalktnt", on_tell_command9)

def on_tell_command10():
    mobs.teleport_to_player(mobs.target(LOCAL_PLAYER), mobs.target(MY_AGENT))
player.on_tell_command("!tptobot", on_tell_command10)

def on_tell_command11():
    player.tell(mobs.target(LOCAL_PLAYER), "Showing commands:")
    player.tell(mobs.target(LOCAL_PLAYER),
        "!cheats - Enables cheats for this bot, makes everything instant/faster.")
    player.tell(mobs.target(LOCAL_PLAYER),
        "!tnt - Prints out a Big (24x24) TNT cube (slow without cheats), 31x31 cube if theres cheats enabled.")
    player.tell(mobs.target(LOCAL_PLAYER),
        "!tntlite - Prints out a Medium (8x8) TNT cube (okay-ish speed without cheats), instant speed if you have cheats.")
    player.tell(mobs.target(LOCAL_PLAYER),
        "!tntmini - Prints out a Small (4x4) TNT cube (normal speed without cheats), instant speed with cheats.")
    player.tell(mobs.target(LOCAL_PLAYER),
        "!tnttrail (Cheats) (Unstable, Epilepsy Warning) - Leaves a 8x8 TNT Trail behind you, can crash the game if ignited.")
    player.tell(mobs.target(LOCAL_PLAYER),
        "!stop (IMPORTANT) - Stops actions. Does not work with TNT Cube printing commands, instead click the code button (robot button on touch devices)")
    player.tell(mobs.target(LOCAL_PLAYER),
        "!wiper (Cheats) - Makes things vanish, recommended to use in creative while flying. Needs 8+ Simulation Chunks to function fast.")
    player.tell(mobs.target(LOCAL_PLAYER),
        "!walktnt - Recommended to use while flying, leaves a single block TNT trail, cheats do nothing.")
    player.tell(mobs.target(LOCAL_PLAYER),
        "!rainwalktnt - Same as !walktnt but it ignites the TNT blocks.")
    player.tell(mobs.target(LOCAL_PLAYER),
        "!tp (IMPORTANT) - Teleports the bot to you, recommended in use with tntrain, and when printing TNT Cubes.")
    player.tell(mobs.target(LOCAL_PLAYER),
        "!tntrain - Makes TNT Rain, please use with !tp.")
player.on_tell_command("help", on_tell_command11)

def on_tell_command12():
    global wiper
    if playerHasCheats == 1:
        stop()
        wiper = 1
    else:
        player.tell(mobs.target(LOCAL_PLAYER),
            "You need operator commands for this. Please run !cheats to enable.")
player.on_tell_command("!wiper", on_tell_command12)

def on_tell_command13():
    player.tell(mobs.target(LOCAL_PLAYER), "P.D.U made by 1Emilis")
    player.tell(mobs.target(LOCAL_PLAYER),
        "Currently hosted by " + player.name() + ".Agent" + " ")
player.on_tell_command("!info", on_tell_command13)

def on_tell_command14():
    agent.collect(FLINT_AND_STEEL)
player.on_tell_command("!fas", on_tell_command14)

def on_tell_command15():
    global nctnt2, nctnt1
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    if playerHasCheats == 0:
        agent.set_slot(1)
        for index7 in range(24):
            if nctnt1 == 1:
                agent.move(BACK, 23)
                agent.move(RIGHT, 24)
                agent.move(UP, 1)
            nctnt2 = 0
            nctnt1 = 1
            for index8 in range(24):
                agent.set_item(TNT, 64, 1)
                if nctnt2 == 1:
                    agent.move(FORWARD, 1)
                    agent.move(RIGHT, 24)
                nctnt2 = 1
                for index9 in range(24):
                    agent.place(DOWN)
                    agent.move(LEFT, 1)
    else:
        blocks.fill(TNT, pos(0, 0, 0), pos(30, 30, 30), FillOperation.REPLACE)
player.on_tell_command("!tnt", on_tell_command15)

# opposite of !nocheats (disabled on start)

def on_tell_command16():
    global playerHasCheats
    playerHasCheats = 1
player.on_tell_command("!cheats", on_tell_command16)

wiper = 0
tnttrail = 0
tntrain = 0
rainwalktnt = 0
walktnt = 0
nctnt2 = 0
nctnt1 = 0
playerHasCheats = 0
player.tell(mobs.target(LOCAL_PLAYER), "PDU 1.0 Loaded.")
player.tell(mobs.target(LOCAL_PLAYER), "Made by 1Emilis.")
player.tell(mobs.target(LOCAL_PLAYER),
    "Type \"/tell @s !help\" to get started.")
player.tell(mobs.target(LOCAL_PLAYER), "Operator Permissions detected.")
player.tell(mobs.target(LOCAL_PLAYER),
    "It is recommended to run !cheats.")
username = player.name()
playerHasCheats = 0