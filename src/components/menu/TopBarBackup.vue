 <template>
    <div class="TopBar">
        <div class=""></div>
        <div class="logo_name">{{ menuTitle }}</div>
        <div class="topbar_align">
<!--            <vs-button gradient style="min-width: 30px" warn animation-type="scale">
            <i class='bx bxs-bell' ></i>
            <template #animate ><i class='bx bxs-bell-off' ></i></template>
            </vs-button> -->
            <vs-avatar warn badge badge-color="success">
                <i class='bx bxs-bell' ></i>
                <template #badge>28</template>
            </vs-avatar>
            <vs-avatar badge badge-color="success" badge-position="bottom-left" style="margin: 5px 10px;">
                <img src="@/assets/avatar-teodoro.png" alt="">
                <template #icons>
                <i class='bx bxl-twitch' ></i>
                <i class='bx bxl-discord' ></i>
                </template>
            </vs-avatar>
                <vs-navbar-group style="margin: 0 5px 0 25px;">
                Gabriel Teodoro <i class='bx bxs-bell' ></i>
                <template #items>
                <vs-navbar-item :active="active == 'profile'" id="profile" arrow>Meu Perfil</vs-navbar-item>
                <vs-navbar-item :active="active == 'config'" id="config">Configurações</vs-navbar-item>
                <vs-navbar-item :active="active == 'help'" id="help">Precisa de Ajuda</vs-navbar-item>
                <vs-navbar-item :active="active == 'exit'" id="exit">Sair</vs-navbar-item>
                </template>
            </vs-navbar-group>
        </div>
    </div>
</template>
