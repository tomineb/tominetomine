<script setup lang="ts">


</script>

<template>
    <div> 
        <header> 

            <nav id="nav-bar">
              <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/studio">Studio</RouterLink>

            </nav>
        </header>

    </div>
</template>

<style> 

#nav-bar {
  display: flex;
  flex-direction: column;
  letter-spacing: 2px;
  font-size: 22px;
  margin-top: 1%;
  margin-left: 20px;
}

#nav-bar :link {
  text-decoration: none;
}

#nav-bar :visited {
  text-decoration: none;
}

#nav-bar :hover {
  text-decoration: none;
}

#nav-bar :active {
  text-decoration: none;
}

</style>