<script setup lang="ts">
import { BookIcon, LockIcon, VideoIcon } from "@iconicicons/vue3";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "wedges-vue";
</script>

<template>
  <div className="m-auto w-fit text-left">
    <Tabs variant="contained-bottom" default-value="actions">
      <TabsList>
        <TabsTrigger value="actions">
          <VideoIcon />
          Actions
        </TabsTrigger>

        <TabsTrigger value="wiki">
          <BookIcon />
          Wiki
        </TabsTrigger>

        <TabsTrigger value="security">
          <LockIcon />
          Security
        </TabsTrigger>
      </TabsList>

      <TabsContent value="actions">
        Actions tab content
      </TabsContent>
      <TabsContent value="wiki">
        Wiki tab content
      </TabsContent>
      <TabsContent value="security">
        Security tab content
      </TabsContent>
    </Tabs>
  </div>
</template>
