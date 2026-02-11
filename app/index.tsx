import ToDoForm from "@/components/to-do-form";
import ToDoList from "@/components/to-do-list";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
