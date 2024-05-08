<script setup lang="ts">
import { BoxIcon, ClockIcon, SpinnerIcon } from "@iconicicons/vue3";
import { Badge, Tabs, TabsList, TabsTrigger } from "wedges-vue";
</script>

<template>
  <div class="m-auto flex w-fit max-w-full flex-col gap-10 overflow-scroll p-2 text-left">
    <!-- {/* Example 1 */} -->
    <Tabs variant="underlined" default-value="actions">
      <TabsList>
        <TabsTrigger

          value="actions"
        >
          <template #before>
            <SpinnerIcon />
          </template>
          In progress

          <template #after>
            <Badge stroke size="sm" shape="pill">
              24
            </Badge>
          </template>
        </TabsTrigger>

        <TabsTrigger
          value="Shipped"
        >
          <template #before>
            <BoxIcon class="text-wg-green" />
          </template>
          Shipped

          <template #after>
            <Badge stroke size="sm" shape="pill">
              19
            </Badge>
          </template>
        </TabsTrigger>

        <TabsTrigger
          value="delayed"
        >
          <template #before>
            <ClockIcon class="text-wg-red" />
          </template>
          Security

          <template #after>
            <Badge stroke size="sm" shape="pill">
              3
            </Badge>
          </template>
        </TabsTrigger>
      </TabsList>
    </Tabs>

    <!-- {/* Example 2 */} -->
    <Tabs variant="contained-bottom" default-value="actions">
      <TabsList>
        <TabsTrigger

          value="actions"
        >
          <template #before>
            <SpinnerIcon />
          </template>
          In progress

          <template #after>
            <Badge stroke size="sm" shape="pill">
              24
            </Badge>
          </template>
        </TabsTrigger>

        <TabsTrigger>
          <template #before>
            <BoxIcon class="text-wg-green" />
          </template>
          Shipped

          <template #after>
            <Badge stroke size="sm" shape="pill">
              19
            </Badge>
          </template>
        </TabsTrigger>

        <TabsTrigger
          value="delayed"
        >
          <template #before>
            <ClockIcon class="text-wg-red" />
          </template>
          Security
          <template #after>
            <Badge stroke size="sm" shape="pill">
              3
            </Badge>
          </template>
        </TabsTrigger>
      </TabsList>
    </Tabs>

    <!-- {/* Example 3 */} -->
    <Tabs variant="fill" default-value="actions">
      <TabsList>
        <TabsTrigger
          value="actions"
        >
          <template #before>
            <SpinnerIcon />
          </template>
          In progress

          <template #after>
            <Badge stroke size="sm" shape="pill">
              24
            </Badge>
          </template>
        </TabsTrigger>

        <TabsTrigger

          value="Shipped"
        >
          <template #before>
            <BoxIcon class="text-wg-green" />
          </template>
          Shipped

          <template #after>
            <Badge stroke size="sm" shape="pill">
              19
            </Badge>
          </template>
        </TabsTrigger>

        <TabsTrigger
          value="delayed"
        >
          <template #before>
            <ClockIcon class="text-wg-red" />
          </template>
          Security

          <template #after>
            <Badge stroke size="sm" shape="pill">
              3
            </Badge>
          </template>
        </TabsTrigger>
      </TabsList>
    </Tabs>

    <!-- {/* Example 4 */} -->
    <Tabs variant="contained-top" default-value="actions">
      <TabsList>
        <TabsTrigger
          value="actions"
        >
          <template #before>
            <SpinnerIcon />
          </template>
          In progress

          <template #after>
            <Badge stroke size="sm" shape="pill">
              24
            </Badge>
          </template>
        </TabsTrigger>

        <TabsTrigger
          value="Shipped"
        >
          <template #before>
            <BoxIcon class="text-wg-green" />
          </template>
          Shipped
          <template #after>
            <Badge stroke size="sm" shape="pill">
              19
            </Badge>
          </template>
        </TabsTrigger>

        <TabsTrigger
          value="delayed"
        >
          <template #before>
            <ClockIcon class="text-wg-red" />
          </template>
          Security

          <template #after>
            <Badge stroke size="sm" shape="pill">
              3
            </Badge>
          </template>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
</template>
