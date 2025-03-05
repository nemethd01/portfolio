<template>
    <ul class="cyber-list">
        <li v-for="(item, index) in items" :key="index">
            <span class="glitch" data-text="⚡ {{ item }}">⚡ {{ item }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: ["Fájlkezelés", "Drag & Drop", "Sötét mód", "Reszponzív dizájn"]
        };
    }
}
</script>

<style scoped>
.cyber-list {
    list-style: none;
    padding: 0;
    max-width: 400px;
    margin: 20px auto;
}

.cyber-list li {
    padding: 10px;
    margin: 10px 0;
    color: #00ffff;
    font-size: 1.2rem;
    font-family: "Orbitron", sans-serif;
    text-transform: uppercase;
    border-bottom: 2px solid rgba(0, 255, 255, 0.2);
    transition: 0.3s;
}

.cyber-list li:hover {
    color: #ff00ff;
    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;
    transform: scale(1.05);
}

.glitch {
    position: relative;
    display: inline-block;
}

.glitch:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: -2px 0 red;
    animation: glitch-anim 0.5s infinite alternate;
}

@keyframes glitch-anim {
    0% { transform: translateX(-1px); }
    100% { transform: translateX(1px); }
}
</style>
