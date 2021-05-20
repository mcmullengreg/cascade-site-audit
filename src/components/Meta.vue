<template>
  <ul>
    <li><strong>Created:</strong> {{ page.createdDate }}</li>
    <li><strong>Created By:</strong> {{ page.createdBy }}</li>
    <li v-if="page.lastModifiedDate"><strong>Last Modified:</strong> {{ page.lastModifiedDate }}</li>
    <li v-if="page.lastModifiedBy"><strong>Last Editor:</strong> {{ page.lastModifiedBy }}</li>
    <li v-if="page.lastPublishedDate"><strong>Last Publish:</strong> {{ page.lastPublishedDate }}</li>
    <li v-if="page.lastPublishedBy"><strong>Last Publisher:</strong> {{ page.lastPublishedBy }}</li>
    <li v-if="page.metadata && page.metadata.dynamicFields">
      <strong>Dynamic Metadata:</strong>
      <span v-for="meta in page.metadata.dynamicFields" :key="meta">
        <ul>
          <li>
            <strong>{{ meta.name }}:</strong> <code>{{ meta.fieldValues }}</code>
          </li>
        </ul>
      </span>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Meta',
  props: {
    page: Object
  }
}
</script>