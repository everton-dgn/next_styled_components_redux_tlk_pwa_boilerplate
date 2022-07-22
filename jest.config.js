module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  fakeTimers: {
    enableGlobally: true
  },
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/pages/_app.page.tsx',
    'src/pages/index.page.tsx',
    'src/pages/_document.page.tsx',
    'src/ui/components/index.tsx',
    'src/ui/components/atoms/index.tsx',
    'src/ui/components/molecules/',
    'src/ui/components/templates/index.tsx',
    'src/ui/theme/',
    'src/ui/globalStyles/',
    'src/ui/providers/',
    'src/ui/assets/',
    'src/hooks/index.ts',
    'src/tests/providers/',
    'src/data/',
    'src/infra/adapters/httpClient/',
    'src/infra/http/',
    'src/infra/store/',
    'src/types/',
    'src/testHelpers/',
    'stories.tsx',
    'types.ts'
  ],
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/testHelpers/mocks/svg.ts'
  },
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: -10
    }
  }
}
