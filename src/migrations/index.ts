import { createNewProject, migrateProject, getHighestProjectVersion, runHealthCheckMigrations } from "./project";

const migrations = {
  createNewProject, migrateProject, getHighestProjectVersion, runHealthCheckMigrations
}

export { migrations };
