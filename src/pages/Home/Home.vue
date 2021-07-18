<template>
<div>
  <TypeNav></TypeNav>
  <Container></Container>
  <Recommend></Recommend>
  <Rank></Rank>
  <Like></Like>
  <Floor_01></Floor_01>
  <Floor_01></Floor_01>
  <Brand></Brand>
</div>
</template>

<script>
import Container from "@/pages/Home/Container/Container";
import Recommend from "@/pages/Home/Recommend/Recommend";
import Like from "@/pages/Home/Like/Like";
import Rank from "@/pages/Home/Rank/Rank";
import Floor_01 from "@/pages/Home/Floor_01/Floor_01";
import Brand from "@/pages/Home/Brand/Brand";
export default {
  name: "Home",
  components:{Container,Recommend,Like,Rank,Floor_01,Brand}
}
</script>

<style scoped>

</style>
