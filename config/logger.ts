import winston from 'winston';
import path from 'path';

// Define log file paths
const logsPath = path.join(__dirname, '..', 'logs');
const applicationLogPath = path.join(logsPath, 'application.log');
const errorLogPath = path.join(logsPath, 'error.log');
const accessLogPath = path.join(logsPath, 'access.log');
const debugLogPath = path.join(logsPath, 'debug.log');
const auditLogPath = path.join(logsPath, 'audit.log');
const combinedLogPath = path.join(logsPath, 'combined.log');

// Create a Winston logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    // Log to console for development
    new winston.transports.Console(),

    // Log application events to application.log
    new winston.transports.File({ filename: applicationLogPath, level: 'info' }),

    // Log errors to error.log
    new winston.transports.File({ filename: errorLogPath, level: 'error' }),

    // Log access requests to access.log
    new winston.transports.File({ filename: accessLogPath, level: 'info' }),

    // Log debug messages to debug.log
    new winston.transports.File({ filename: debugLogPath, level: 'debug' }),

    // Log audit events to audit.log
    new winston.transports.File({ filename: auditLogPath, level: 'info' }),

    // Log all events to combined.log
    new winston.transports.File({ filename: combinedLogPath }),
  ],
});

export default logger;
