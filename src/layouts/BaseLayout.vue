<template>
  <div class="page-layout">
      <header class="w-full p-4 bg-cyan-700 text-zinc-50 drop-shadow-md">
        <slot name="header"></slot>
      </header>
      <main class="m-8 font-sans">
        <slot></slot>
      </main>
      <footer class="container items-center flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-600 text-smslack text-zinc-400
      ">
        <slot name="footer"></slot>
      </footer>
  </div>
</template>
