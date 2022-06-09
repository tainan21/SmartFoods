 <template>
    <div class="TopBar">
        <div class=""></div>
        <div class="logo_name">{{ menuTitle }}</div>
        <div class="topbar_align">
            <vs-avatar warn badge badge-color="success">
                <i class='bx bxs-bell' ></i>
                <template #badge>28</template>
            </vs-avatar>
            <vs-avatar badge badge-color="success" badge-position="bottom-left" style="margin: 5px 10px;">
                <img src="@/assets/avatar-teodoro.png" alt="">
            </vs-avatar> 
        </div>
    </div>
</template>
