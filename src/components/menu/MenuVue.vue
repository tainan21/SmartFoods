<template>
		<div class="hidden" style="margin-bottom: 60px;">
			<vs-navbar shadow square center-collapsed v-model="active">
				<template #left>
					<vs-button @click="activeSidebar = !activeSidebar" flat icon>
						<i class='bx bx-menu-alt-right'></i>
					</vs-button>
						
				</template>
				<template #right>
						<vs-avatar badge badge-color="success" badge-position="bottom-left" style="margin: 5px 10px;">
								<img src="@/assets/avatar-teodoro.png" alt="">
						</vs-avatar> 
						<vs-avatar warn badge badge-color="success">
								<i class='bx bxs-bell' ></i>
								<template #badge>28</template>
						</vs-avatar>
				</template>
			</vs-navbar>
			<vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
				<template #logo>SEUMEI</template>
				<vs-sidebar-item id="home" to="/">
					<template #icon><i class='bx bx-home'></i></template>Home
				</vs-sidebar-item>
				<vs-sidebar-item id="about" to="/about">
					<template #icon><i class='bx bx-home'></i></template>Sobre
				</vs-sidebar-item>
				<vs-sidebar-item id="Login" to="/LoginRegister">
					<template #icon><i class='bx bx-home'></i></template>Login
				</vs-sidebar-item>
				<vs-sidebar-item id="market" to="/CrudProdutos">
					<template #icon><i class='bx bx-pie-chart-alt-2'></i></template>Cátalogo
				</vs-sidebar-item>
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon><i class='bx bx-group'></i></template>Cadastros
						</vs-sidebar-item>
					</template>
					<vs-sidebar-item id="Instagram" to="/Category">
						<template #icon><i class='bx bxl-instagram'></i></template>Categorias
					</vs-sidebar-item>
					<vs-sidebar-item id="twitter" to="/Adcionais">
						<template #icon><i class='bx bxl-twitter' ></i></template>Adcionais
					</vs-sidebar-item>
					<vs-sidebar-item id="twitter" to="/CrudProdutos">
						<template #icon><i class='bx bxl-twitter' ></i></template>Cadastrar Produtos
					</vs-sidebar-item>
				</vs-sidebar-group>
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon><i class='bx bx-group'></i></template>Produtos
						</vs-sidebar-item>
					</template>
					<vs-sidebar-item id="Instagram" to="/">
						<template #icon><i class='bx bxl-instagram'></i></template>Listar Produtos
					</vs-sidebar-item>
					<vs-sidebar-item id="twitter" to="/CrudProdutos">
						<template #icon><i class='bx bxl-twitter' ></i></template>Cadastrar Produtos
					</vs-sidebar-item>
					<vs-sidebar-item id="Facebook" to="/">
						<template #icon><i class='bx bxl-facebook' ></i></template>Alguma coisa
					</vs-sidebar-item>
				</vs-sidebar-group>
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon><i class='bx bx-code-alt' ></i></template>Pedidos</vs-sidebar-item>
					</template>
					<vs-sidebar-item id="github" to="/ListPedidos">
						<template #icon ><i class='bx bxl-github' ></i></template>Lista de Pedidos
					</vs-sidebar-item>
					<vs-sidebar-item id="codepen">
						<template #icon><i class='bx bxl-codepen'></i></template>Cadastrar Pedidos
					</vs-sidebar-item>
					<vs-sidebar-item id="discord"  to="/canban">
						<template #icon><i class='bx bxl-discord'></i></template>Acompanhar Pedido
					</vs-sidebar-item>
				</vs-sidebar-group>
				<vs-sidebar-group>
					<template #header>
						<vs-sidebar-item arrow>
							<template #icon><i class='bx bxs-shopping-bags' ></i></template>Faça seu Pedido
						</vs-sidebar-item>
					</template>
					<vs-sidebar-item id="Pedido" to="/pedidoPrincipal">
						<template #icon><i class='bx bx-heart' ></i></template>Faça seu Pedido
					</vs-sidebar-item>
					<vs-sidebar-item id="codepen" to="/CarShop">
						<template #icon ><i class='bx bx-cog'></i></template>Carrinho de Compras
					</vs-sidebar-item>
					<vs-sidebar-item id="discord" to="/ProdutoDetalhes">
						<template #icon ><i class='bx bxl-discord'></i></template>Produtos Detalhes
					</vs-sidebar-item>
					<vs-sidebar-item id="promocoes" to="/promocoes">
						<template #icon ><i class='bx bxl-discord'></i></template>Promoções
					</vs-sidebar-item>
					<vs-sidebar-item id="sobremesa" to="/sobremesa">
						<template #icon ><i class='bx bxl-discord'></i></template>Sobremesas
					</vs-sidebar-item>
				</vs-sidebar-group>
				<vs-sidebar-item id="market" to="StaticsGraph">
					<template #icon><i class='bx bx-pie-chart-alt-2'></i></template>Estatisticas
				</vs-sidebar-item>
				<vs-sidebar-item id="donate">
					<template #icon  to="/ClientesList">
						<i class='bx bx-group' ></i></template>Clientes
				</vs-sidebar-item>
				<vs-sidebar-item id="shopping">
					<template #icon>
						<i class='bx bxs-shopping-bags'></i>
					</template>
					Shopping
				</vs-sidebar-item>
				<vs-sidebar-item id="chat">
					<template #icon>
						<i class='bx bx-chat' ></i>
					</template>
					Chat
				</vs-sidebar-item>
				<template #footer>
					<vs-row justify="space-between">
						<vs-avatar>
							<img src="/avatars/avatar-5.png" alt="">
						</vs-avatar>

						<vs-avatar badge-color="danger" badge-position="top-right">
							<i class='bx bx-bell' ></i>

							<template #badge>
								28
							</template>
						</vs-avatar>
					</vs-row>
				</template>
			</vs-sidebar>
		</div>
	</template>
<script>
	export default {
		data:() => ({
			active: 'home',
			activeSidebar: false
		})
	}
	</script>

				