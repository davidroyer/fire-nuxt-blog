<template>
  <div id="test-toolbar">
    <!-- Add font size dropdown -->
    <select class="ql-size">
        <option value="small"></option>
        <!-- Note a missing, thus falsy value, is used to reset to default -->
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
    <!-- Add a bold button -->
    <button class="ql-bold"></button>
    <v-btn-toggle multiple v-model="toggle_multiple">

      <v-btn flat class="ql-align" value="">
        <v-icon>format_align_left</v-icon>
      </v-btn>
      <v-btn flat class="ql-align" value="center">
        <v-icon>format_align_center</v-icon>
      </v-btn>
      <v-btn flat class="ql-align" value="right">
        <v-icon>format_align_right</v-icon>
      </v-btn>
      <v-btn flat class="ql-align" value="justify">
        <v-icon>format_align_justify</v-icon>
      </v-btn>

      <v-btn flat class="ql-bold">
        <v-icon>format_bold</v-icon>
      </v-btn>
      <v-btn flat class="ql-italic">
        <v-icon>format_italic</v-icon>
      </v-btn>
      <v-btn flat class="ql-underline">
        <v-icon>format_underlined</v-icon>
      </v-btn>
      <v-btn flat class="ql-background">
        <v-icon>format_color_fill</v-icon>
      </v-btn>
      <v-btn flat class="ql-stike">
        <v-icon>strikethrough_s</v-icon>
      </v-btn>
    </v-btn-toggle>
  </div>  
</template>
