<template>
<div>
    <HeaderAdmin>
        <template v-slot:titlepage>
            DASHBOARD        
        </template>
    </HeaderAdmin>
</div>
</template>

<script>
import HeaderAdmin from './layouts/LayoutAdmin'
export default {
    name: "Dashboard",
    data() {
        return {

        }
    },
    components: {
        HeaderAdmin,
    },
}
</script>

<style>

</style>
